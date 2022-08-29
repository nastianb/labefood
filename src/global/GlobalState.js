import { GlobalContext } from './GlobalContext'
import React, {useContext, useEffect, useState} from 'react'

export const GlobalStateProvider = (props) => {

    //objeto user
    const [user, setUser] = useState({});

    // produtos no carrinho
    const [cart, setCart] = useState([]);

    // info pedido criado
    const [order, setOrder] = useState({})

    // info filtro
    const [filter, setFilter] = useState("")

    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        cartLocal && setCart(JSON.parse(cartLocal))
    },[])
    
    let states = {user, cart, order, filter}; 
    let setters = {setUser, setCart, setOrder, setFilter}
    

    return (
        <GlobalContext.Provider value = {{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// export const useFilter = () => useContext(GlobalContext)


