import axios from "axios";
import { BaseUrl } from '../constants/api';
import { goToHome } from "../routes/cordinator";


export const attemptLogin= async (url, body, setOpen,setMessageError) => {
    try 
    {
        const response = await axios.post(`${BaseUrl}${url}`,body)
        return response; 
    }
    catch (error) {
       
        setOpen(true)
        setMessageError(error.response.data.message)
    }
}

export  const attemptSignUp = async (url, body, setOpen,setMessageError) => {
    try 
    {
        const response = await axios.post(`${BaseUrl}${url}`,body)
        return response; 
    }
    catch (error) {
        setOpen(true)
        setMessageError(error.response.data.message)
    }
}

export const attemptCreateAddress = async (url, body,token, setOpen, setMessageError) => {
  
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getUserAddress = async (url, token, setOpen, setMessageError, setUserAddress) => {
    try {
      const response = await axios.get(`${BaseUrl}${url}`, {
        headers: { 
            'auth': token
          }
        })
        setUserAddress(response.data.address)

    }
    catch(error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }


  export const attemptEditAddress = async (url, body,token, setOpen, setMessageError) => {
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getUserInfo= async (url, token, setOpen, setMessageError, setUserInfo) => {
    try {
      const response = await axios.get(`${BaseUrl}${url}`, {
        headers: { 
            'auth': token
          }
        })
        setUserInfo(response.data.user)
  
    }
    catch(error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getUserInfoStart= async (url, token, setUserInfo) => {
    try {
      const response = await axios.get(`${BaseUrl}${url}`, {
        headers: { 
            'auth': token
          }
        })
        setUserInfo(response.data.user)
  
    }
    catch(error) {
     
      console.log(error.response.data.message)
    }
  }

  export const attemptEditUserInfo = async (url, body, token, setOpen, setMessageError) => {
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getRequest = (endpoint, setData) => {
    const token = window.sessionStorage.getItem('token')
    const headers = {
        headers: {
            auth: token
        }
    }
    axios.get(`${BaseUrl}${endpoint}`, headers)
        .then((res) => {
            setData(res.data)
        })
}

export const postRequest = (endpoint, body, setCart, setError, setOpen, navigate, resetLocal, setOrder) => {
  const token = window.sessionStorage.getItem('token')
  const headers = {
      headers: {
          auth: token
      }
  }

  axios.post(BaseUrl + endpoint, body, headers)
      .then((res) => {
          setCart([])
          goToHome(navigate)
          resetLocal()
          setOrder(res.data)
          window.localStorage.removeItem('resId')
          window.localStorage.removeItem('cart')
      })
      .catch((err) => {
          setError(err.response.data)
          setOpen(true)
      })
}

export const getOrdersHistory = async (url, token, setOpen, setMessageError, setOrderHistory) => 
{
  try {
    const response = await axios.get(`${BaseUrl}${url}`, {
      headers: { 
          'auth': token
        }
      })

  
      setOrderHistory(response.data.orders)

  }
  catch(error) {
    setOpen(true)
    setMessageError(error.response.data.message)
  }
}

export const getActiveOrder= async (url, token, setActiveOrder) => {
  try {
    const response = await axios.get(`${BaseUrl}${url}`, {
      headers: { 
          'auth': token
        }
      })
      setActiveOrder(response.data.order)

  }
  catch(error) {
   
    console.log(error.response.data.message)
  }
}