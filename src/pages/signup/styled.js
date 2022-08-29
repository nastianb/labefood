import styled from "styled-components"
import { Button, InputAdornment, TextField } from '@mui/material';


export const SignUpPageMainDiv = styled.div`
height: 100vh;  
width: 100vw; 
font-family: 'Roboto', sans-serif; 
font-size: 16px; 
letter-spacing: -0.39px;
color: black; 
`

export const SignUpPageLogoDiv = styled.div`
display: flex; 
flex-direction: column; 
margin-top: 24px; 
height: 58px; 
width: 100%; 
align-items: center; 
justify-content: flex-end; 

img{
    max-width: 104px; 
    max-height: 58px; 
}

`

export const SignUpPageContentDiv = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
margin-top: 28px; 




p{
    font-family: 'Roboto', sans-serif;
}

h3{
  font-size: 16px; 
  margin-bottom: 20px;
}
`


export const SignUpPageFormDiv = styled.div`
display: flex; 
flex-direction: column; 
font-family: 'Roboto', sans-serif; 
width: 90%; 

#passwordInput{
    margin-top: 16px; 
}

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
 
`;
