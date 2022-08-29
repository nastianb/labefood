import React, { useContext, useEffect, useState } from 'react'
import { Address, AddressContainer, AddressLabel, EmptyCart, Title, PaymentContainer, PaymentTitle, CartContainer, SubTotal, SubTotalContainer, RightText, InfoContainer, ButtonCart, ButtonContainer, BoxLabel, CardsContainer, RestaurantInfo, Name, Infos } from './styled'
import { FormControlLabel, Radio, RadioGroup, FormControl, Snackbar, Alert } from '@mui/material'
import CardProduct from '../../components/cardProduct/CardProduct'
import { GlobalContext } from '../../global/GlobalContext'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../../services/requests'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const CartPage = () => {

    useProtectedPage()

    const [paymentMethod, setPayment] = useState('');
    const [choosenRestaurant, setChoosenRestaurant] = useState({});
    const [restaurantId, setRestaurantId] = useState({});
    const { states, setters } = useContext(GlobalContext)
    const { cart, user } = states;
    const { setCart, setOrder, setUser } = setters;
    const [values, setValues] = useState(0)
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [messageError, setMessageError] = useState('')
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const onChange = (event) => {
        setPayment(event.target.value)
    }
    useEffect(()=>{
        const checkId = window.localStorage.getItem('resId')
        const getUser = window.sessionStorage.getItem('user')
        setUser(JSON.parse(getUser))
        setRestaurantId(checkId)
    },[])

    useEffect(() => {
        const restaurant = JSON.parse(window.localStorage.getItem(restaurantId))
        setChoosenRestaurant(restaurant)
    }, [restaurantId])
    

    useEffect(() => {
        let total = 0;
        if (cart.length > 0) {
            cart.forEach((product) => {
                total = total + product.price * product.quantity
            })
            const subTotal = total+choosenRestaurant?.restaurant?.shipping
            setValues(subTotal.toFixed(2))
        } else {
            setValues(total.toFixed(2))
        }
    }, [cart, choosenRestaurant])

    const placeOrder = (event) => {
        event.preventDefault()
        const products = cart.map((product) => {
            return { id: product.id, quantity: product.quantity }
        })

        const body = {
            products: products,
            paymentMethod: paymentMethod
        }

        postRequest(`restaurants/${choosenRestaurant.restaurant.id}/order`, body, setCart, setMessageError, setOpen, navigate, resetLocal, setOrder)
    }

    const resetLocal = () => {
        cart.forEach((productOnCart) => {
            const restaurant = JSON.parse(window.localStorage.getItem(restaurantId))
            const restaurantCopy = [...restaurant.restaurant.products]
            
            const product = restaurantCopy.filter((item) => {
                return item.id === productOnCart.id
            })
            
            const productCopy = { ...product[0], quantity: 0 }
            
            const indexR = restaurantCopy.findIndex((item) => item.id === productOnCart.id)
            
            restaurantCopy[indexR] = productCopy
            window.localStorage.setItem(restaurantId, JSON.stringify({
                ...restaurant,
                restaurant: {
                    ...restaurant.restaurant, products: restaurantCopy
                }
            }))
        })
        window.localStorage.removeItem('cart')
    }

    return (
        <CartContainer>
            <Title>
                Meu carrinho
            </Title>
            <AddressContainer>
                <AddressLabel>
                    Endereço de entrega
                </AddressLabel>
                <Address>
                    {user && user.address}
                </Address>
            </AddressContainer>

            {
                cart.length > 0 ?
                    <>
                        <RestaurantInfo>
                            <Name>
                                {choosenRestaurant?.restaurant?.name}
                            </Name>
                            <Infos>
                                {choosenRestaurant?.restaurant?.address}
                            </Infos>
                            <Infos>
                                {choosenRestaurant?.restaurant?.deliveryTime} min
                            </Infos>
                        </RestaurantInfo>
                        <CardsContainer>
                            {cart.map((product) => {

                                return <CardProduct 
                                    product={product} 
                                    key={product.id} 
                                />
                            })}
                        </CardsContainer>
                    </>
                    :
                    <EmptyCart>
                        Carrinho vazio
                    </EmptyCart>

            }

            <InfoContainer>
                <RightText>Frete R${cart.length > 0 ? choosenRestaurant?.restaurant?.shipping : 0},00</RightText>

                <SubTotalContainer>
                    <p>SUBTOTAL</p>
                    <SubTotal>R${values && values.replace('.',',')}</SubTotal>
                </SubTotalContainer>

                <PaymentContainer>

                    <PaymentTitle>
                        Forma de pagamento
                    </PaymentTitle>

                    <Box component={'form'} onSubmit={placeOrder} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>

                        <FormControl
                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, width: '100%' }}
                        >

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={onChange}
                                value={paymentMethod}
                            >
                                <FormControlLabel value={'money'} control={<Radio required />} label={<BoxLabel>Dinheiro</BoxLabel>} />

                                <FormControlLabel value={'creditcard'} control={<Radio required />} label={<BoxLabel>Cartão de crédito</BoxLabel>} />
                            </RadioGroup>

                            <ButtonContainer>
                                <ButtonCart
                                    type='submit'
                                    sx={{ width: '100%' }}
                                    variant={cart.length > 0 ? 'primary' : 'secondary'} disabled={cart.length > 0 ? false : true}
                                >
                                    Confirmar
                                </ButtonCart>
                            </ButtonContainer>
                        </FormControl>
                    </Box>
                </PaymentContainer>
            </InfoContainer>
            <NavigationBar 
                sourcePage='cart'
            />
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'top' + 'center'}

            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    {messageError.message}
                </Alert>
            </Snackbar>
        </CartContainer>
    )
}

export default CartPage