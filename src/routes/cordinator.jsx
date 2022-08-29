
export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToHome = (navigate) => {
    navigate('/')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goToSearch = (navigate) => {
    navigate('/search')
}
export const goToSignUp = (navigate) => {
    navigate('/signup')
}
export const goToLastPage = (navigate) => {
    navigate(-1); 
}
export const goToCreateAddresspage = (navigate) => {
    navigate('signup/address'); 
}



