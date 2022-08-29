import styled from "styled-components"


export const ProfilePageMainDiv = styled.div`
height: 100vh;  
width: 100vw; 
font-family: 'Roboto', sans-serif; 
font-size: 16px; 
letter-spacing: -0.39px;
color: black; 
`

export const LoadingDiv = styled.div`
display: flex; 
align-items: center; 
justify-content: center;  

height: 102px; 
width: 100%; 

img{
    height: 90%; 
    width: 90%
}
`

export const PastOrdersDiv = styled.div`
width: 89%; 
margin: 0 auto; 
display: flex; 
flex-direction: column; 
margin-top: 16px; 
padding-bottom: 10vh; 
overflow: hidden;
overflow-y: scroll;

`

export const TitleDiv = styled.div`
height: 32px; 
width: 100%; 
display: flex; 
align-items: center; 
justify-items: flex-start; 
border-bottom: solid 1px black; 
font-size: 16px; 
`

export const EmptyMessageDiv = styled.div`

`

export const CardsDiv = styled.div`
    width: 100%; 
  
    
`