import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { ProfilePageMainDiv,LoadingDiv, PastOrdersDiv, TitleDiv, EmptyMessageDiv, CardsDiv } from './styled'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { getOrdersHistory, getUserInfo } from '../../services/requests';
import EditUserCard from '../../components/EditUserCard/EditUserCard';
import loading from '../../assets/myLoading.svg';
import EditAddressCard from '../../components/EditAddressCard/EditAddressCard';
import OrderHistoryCard from '../../components/OrderHistoryCard/OrderHistoryCard';
import { useProtectedPage } from '../../hooks/useProtectedPage';

const ProfilePage = () => {

    const [open, setOpen] = useState(''); 
    const [messageError, setMessageError] = useState(''); 
    const [userInfo, setUserInfo] = useState({}); 
    const [orderHistory, setOrderHistory] = useState({})
    
useProtectedPage()

useEffect(()=>{
let token = window.sessionStorage.getItem('token'); 

getUserInfo('profile',token,setOpen,setMessageError, setUserInfo);
getOrdersHistory('orders/history',token,setOpen,setMessageError, setOrderHistory)

},[])

let pastOrders = orderHistory && orderHistory.length >0 && orderHistory.map( (order) => {
    return (<OrderHistoryCard order={order} key={order.createdAt}/>)
})

    return (
        <ProfilePageMainDiv>
            <Header title="Meu perfil" hideBackButton={true} /> 
            {userInfo && userInfo.name ? <EditUserCard user = {userInfo}/> :<LoadingDiv> <img alt='loading' src={loading} /></LoadingDiv>}
            <EditAddressCard address = {userInfo.address} /> 
            <PastOrdersDiv>
                <TitleDiv>
                    <p>Histórico de pedidos</p>
                </TitleDiv>

                <CardsDiv>
                    {pastOrders && pastOrders.length > 0 ? pastOrders: <EmptyMessageDiv><p></p></EmptyMessageDiv>}
                </CardsDiv>
                
            </PastOrdersDiv>
            <NavigationBar sourcePage = 'profile'/>
        </ProfilePageMainDiv>
    )
}

export default ProfilePage