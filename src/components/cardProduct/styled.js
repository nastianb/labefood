import styled from 'styled-components'
import { primaryColor } from '../../theme/colors'
import { Button } from '@mui/material'

export const CardContainer = styled.div`
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    height: 130px;
    display: flex;
    width: 100%;
`

export const CardImage = styled.img`
    width: 96px;
    height: 128.5px;
    margin-top: -0.5px;
    border-radius: 8px 0px 0px 8px;
    object-fit: cover;
`

export const CardInfo = styled.div`
    padding: 18px 0px 15px 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap:8px;
    justify-content: space-between;
`
export const Product = styled.span`
    font-size: 16px;
    letter-spacing: -0.39px;
    color: ${primaryColor};
`
export const Description = styled.span`
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    height: 26px;
`
export const Price = styled.span`
    font-size: 16px;
    letter-spacing: -0.39px;
`
export const CardButton = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   height: 130px;
   width: 90px;
   position:relative;
   top:-1px;
   right: -1px;
   .MuiButton-root{
        text-transform:lowercase;
        background: 'transparent';
        padding: 4px;
        font-size: 12px;
        width: 90px;
        letter-spacing: -0.29px;
        border: solid 1px ${props=> props.checkCart.length>0 ? '#e02020' : primaryColor};
        border-radius:8px 0px;
        color:${props=> props.checkCart.length>0 ? '#e02020' : primaryColor};
   }
`
export const Quantity = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    border: solid 1px ${primaryColor};
    color:${primaryColor};
    font-size: 16px;
    letter-spacing: -0.39px;
    border-radius:0px 8px;
    width: 33px;
    height: 33px;
`
