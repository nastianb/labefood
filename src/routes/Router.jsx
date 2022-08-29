import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import CartPage from '../pages/cart/CartPage'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import ProfilePage from '../pages/profile/Profile'
import RestaurantPage from '../pages/restaurant/Restaurant'
import SearchPage from '../pages/search/SearchPage'
import SignUpPage from '../pages/signup/SignUpPage'
import AddressPage from '../pages/CreateAddress/CreateAddressPage'
import EditAddressPage from '../pages/EditAddress/EditAddressPage'
import EditUserPage from '../pages/EditUser/EditUserPage'


const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/profile/user' element={<EditUserPage/>} />
                <Route path='/profile/address' element={<EditAddressPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/restaurant/:id' element={<RestaurantPage />} />
                <Route path='signup/address' element={<AddressPage/>} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router