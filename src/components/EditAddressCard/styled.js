import styled from "styled-components"

export const EditAddressCardMainDiv = styled.div`
width: 100%; 
height: 89px; 
display: flex; 
font-weight: 500; 
font-size: 16px; 
background-color: #eee;

align-items: center; 
`

export const EditAddressInfoDiv = styled.div`
display: flex; 
flex-direction: column; 
justify-content: space-evenly; 
flex-grow: 1; 
height: 100%;
padding-left: 16px; 

h3 {
    font-size: 16px; 
    letter-spacing: -0.39px;
    color: #b8b8b8;
}


`

export const EditAddressIconDiv = styled.div`
display: flex; 
height: 100%;
flex-grow: 0; 
width: 40px; 
align-items: center; 
justify-content: flex-start; 

img {
    width: 25px; 
    height: 25px; 
}

`