import styled from "styled-components"
import { Button, InputAdornment, TextField } from '@mui/material';

export const EditAddressPageMainDiv = styled.div`
height: 100vh;  
width: 100vw; 
font-family: 'Roboto', sans-serif; 
font-size: 16px; 
letter-spacing: -0.39px;
color: black; 
font-weight: 500;
`
export const EditAddressPageContentDiv = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
width: 95%; 
margin: 0 auto; 
margin-top: 28px; 

p{
    font-family: 'Roboto', sans-serif;
}

`


export const EditAddressPageFormDiv = styled.div`
display: flex; 
flex-direction: column; 
font-family: 'Roboto', sans-serif; 
width: 90%; 

Button{
    color: #5cb646;
}

.MuiSvgIcon-root {
    color: #b8b8b8;
}


  .MuiButtonBase-root {
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-size: 16px; 
}


.MuiOutlinedInput-root{
    font-family: 'Roboto', sans-serif; 
}

`

export const GreyBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color:  #b8b8b8 ;
    font-family: 'Roboto', sans-serif;
   
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #b8b8b8 ;
      font-family: 'Roboto', sans-serif;
    }
  }
  .MuiInputLabel-root{
    font-family: 'Roboto', sans-serif;
  }
 
`

export const LoadingDiv = styled.div`

display: flex; 
width: 85vw; 
align-items: center; 
justify-content: center; 
margin-top: 16px; 

img 
{
  max-width: 50px; 
  max-height: 50px;
} 

`

export const LoadingScreenDiv = styled.div`

height: 100vh; 
width: 100vw; 

img{
  height: 100vh; 
width: 100vw; 
}

`