import styled from "styled-components";

export const HeaderMainDiv = styled.div`
display: flex; 
align-items: center; 
justify-content: space-between; 
max-width: 100vw; 
height: 44px; 
border-bottom: 1px rgb(0, 0, 0, 0.25) solid; 


//image is 23px by 24px

img {
    max-width: 23px; 
    max-height: 24px; 
    margin-left: 16px; 
}

p{
    text-align: center; 
}

#spacingRight{
    height: 24px; 
    width: 23px; 
    max-width: 23px; 
    max-height: 24px; 
    margin-right: 16px; 
}

#spacingLeft{
    height: 24px; 
    width: 23px; 
    max-width: 23px; 
    max-height: 24px; 
    margin-left: 16px; 
}



`