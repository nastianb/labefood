import { useNavigate } from 'react-router-dom'
import React,{useEffect} from 'react'

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.sessionStorage.getItem('token')
        
        !token && navigate('/login')

    },[navigate])
    
}