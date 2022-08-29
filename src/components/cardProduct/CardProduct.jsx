import { Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { CardButton, CardContainer, CardImage, CardInfo, Description, Price, Product, Quantity } from "./styled"


const CardProduct = ({product, addButton, setProductId, removeButton}) => {
    const [checkCart, setCheckCart] = useState([])
    const { states, setters } = useContext(GlobalContext)
    const {cart} = states;
    const {setCart} = setters;


    useEffect(()=>{
        const check = cart.filter((item)=>item.id===product.id)
        setCheckCart(check)
    },[cart])
    
    const removeItem = (id) => {
       const restaurantId = window.localStorage.getItem('resId')
        // remove do card
        const cartCopy = [...cart]
        const index = cartCopy.findIndex((item)=>{
            return item.id===id
        })
        cartCopy.splice(index,1)
        window.localStorage.setItem('cart', JSON.stringify(cartCopy))
        setCart(cartCopy)
        cartCopy.length===0 && window.localStorage.removeItem('resId')

        
        // atualiza no array do restaurante
        const restaurant = JSON.parse(window.localStorage.getItem(restaurantId))
        const restaurantCopy = [...restaurant.restaurant.products]

        const product = restaurantCopy.filter((item) => {
            return item.id === id
        })
        const productCopy = { ...product[0], quantity: 0 }

        const indexR = restaurantCopy.findIndex((item) => item.id === id)

        restaurantCopy[indexR] = productCopy
        window.localStorage.setItem(restaurantId, JSON.stringify({
            ...restaurant,
            restaurant: {
                ...restaurant.restaurant, products: restaurantCopy
            }
        }))
        removeButton && removeButton(id)
    }

    const addItem = (item) => {
        addButton()
        setProductId(item.id)
    }

    return(
        <CardContainer>
            <CardImage src={product.photoUrl} alt={product.name}/>
            <CardInfo>
                <Product>{product.name}</Product>
                <Description>{product.description}</Description>
                <Price>R${product.price.toFixed(2).replace('.',',')}</Price>
            </CardInfo>
            <CardButton checkCart ={checkCart}>
                {product.quantity ? <Quantity>{product.quantity}</Quantity>:<div></div>}
                {checkCart.length > 0 ?
                <Button onClick={()=>removeItem(product.id)}>remover</Button>
                :
                <Button onClick={()=>addItem(product)}>adicionar</Button>
                }
            </CardButton>
        </CardContainer>
    )
}


export default CardProduct