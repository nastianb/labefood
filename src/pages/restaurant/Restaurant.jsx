import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../global/GlobalContext';
import Header from '../../components/Header/Header'
import { CardsContainer, Categories, CategoryTitle, InfoDiv, Infos, Logo, Name, PageContainer, RestaurantContainer, RestaurantInfo } from './styled';
import CardProduct from '../../components/cardProduct/CardProduct';
import { Alert, Box, Button, FormControl, MenuItem, Modal, Select, Snackbar, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import { getRequest } from '../../services/requests'
import { useProtectedPage } from '../../hooks/useProtectedPage';

const RestaurantPage = () => {

    useProtectedPage()
    
    const [quantity, setQuantity] = useState(1)
    const [categories, setCategories] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const [productId, setProductId] = useState('')

    const params = useParams()

    useEffect(() => {
        const checkLocal = window.localStorage.getItem(params.id)
        checkLocal && setRestaurant(JSON.parse(checkLocal))
        !checkLocal && getRequest(`restaurants/${params.id}`, setRestaurant)
    }, [])

    const [openAlert, setOpenAlert] = useState(false)
    const [messageError, setMessageError] = useState('')
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { states, setters } = useContext(GlobalContext)
    const { cart } = states;
    const { setCart } = setters;

    useEffect(() => {
        const allCategories = restaurant.restaurant?.products.map((product) => product.category)
        const categories = allCategories?.filter((cur, i) => {
            return allCategories.indexOf(cur) === i
        })
        setCategories(categories)
    }, [restaurant])


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '216px',
        bgcolor: '#fff',
        boxShadow: 24,
        p: '31px 16px 21px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px'
    };

    const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const addCart = () => {
        const idCart = window.localStorage.getItem('resId')
        if(!idCart || params.id === idCart){
            
        const restaurantCopy = [...restaurant.restaurant.products]

        const product = restaurantCopy.filter((item) => {
            return item.id === productId
        })

        const productCopy = { ...product[0], quantity: quantity, restaurant: restaurant.restaurant.name }
        setCart([...cart, productCopy])

        window.localStorage.setItem('cart', JSON.stringify([...cart, productCopy]))

        const index = restaurantCopy.findIndex((item) => item.id === productId)

        restaurantCopy[index] = productCopy

        setRestaurant({
            ...restaurant,
            restaurant: {
                ...restaurant.restaurant, products: restaurantCopy
            }
        })

        window.localStorage.setItem(restaurant.restaurant.id, JSON.stringify({
            ...restaurant,
            restaurant: {
                ...restaurant.restaurant, products: restaurantCopy
            }
        }))

        handleClose()
        setQuantity(1)
        window.localStorage.setItem('resId',params.id)
        } else {
            setMessageError('Conclua seu pedido atual ou remova do carrinho!')
            setOpenAlert(true)
        }


    }
    const remove = (id) => {
        const restaurantCopy = [...restaurant?.restaurant.products]

        const product = restaurantCopy.filter((item) => {
            return item.id === id
        })

        const productCopy = { ...product[0], quantity: 0 }

        const index = restaurantCopy.findIndex((item) => item.id === id)

        restaurantCopy[index] = productCopy

        setRestaurant({
            ...restaurant,
            restaurant: {
                ...restaurant.restaurant, products: restaurantCopy
            }
        })  

        window.localStorage.setItem(restaurant?.restaurant.id, JSON.stringify({
            ...restaurant,
            restaurant: {
                ...restaurant.restaurant, products: restaurantCopy
            }
        }))

    }

    return (
        <PageContainer>
            <Header title={'Restaurante'} />
            <RestaurantContainer>
                <Logo src={restaurant.restaurant?.logoUrl} />
                <RestaurantInfo>
                    <Name>{restaurant.restaurant?.name}</Name>
                    <Infos>{restaurant.restaurant?.category}</Infos>
                    <InfoDiv>
                        <Infos>{restaurant.restaurant?.deliveryTime} min</Infos>
                        <Infos>Frete R${restaurant.restaurant?.shipping},00</Infos>
                    </InfoDiv>
                    <Infos>{restaurant.restaurant?.address}</Infos>
                </RestaurantInfo>

                {
                    categories?.map((item, index) => {
                        return (
                            <Categories key={index}>
                                <CategoryTitle>{item}</CategoryTitle>
                                <CardsContainer>

                                    {
                                        restaurant.restaurant.products.map((product) => {
                                            if (item === product.category) {
                                                return (
                                                    <CardProduct 
                                                        key={product.id}
                                                        product={product} 
                                                        addButton={handleOpen}
                                                        setProductId={setProductId}
                                                        removeButton={remove}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </CardsContainer>
                            </Categories>
                        )
                    })
                }
            </RestaurantContainer>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" sx={{ fontSize: '16px', letterSpacing: '-0.39px', textAlign: 'center' }}>
                        Selecione a quantidade desejada
                    </Typography>
                    <FormControl sx={{ width: '100%' }}>
                        <Select
                            value={quantity}
                            onChange={handleChange}
                        >
                            {
                                quantityOptions.map((option) => {
                                    return <MenuItem key={option} value={option}>{option}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                    <Button
                        sx={{ fontSize: '16px', letterSpacing: '-0.39px', alignSelf: 'flex-end', width: '200px', p: '1px' }}
                        onClick={addCart}
                    >
                        Adicionar ao carrinho
                    </Button>
                </Box>
            </Modal>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'top' + 'center'}
            >
                <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                    {messageError}
                </Alert>
            </Snackbar>
        </PageContainer>
    )
}

export default RestaurantPage