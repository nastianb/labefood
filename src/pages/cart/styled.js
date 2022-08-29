import styled from "styled-components"
import {Box, Button} from '@mui/material'

export const CartContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`
export const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    font-size: 16px;
    letter-spacing: -0.39px;
    height: 44px;
    display: flex; 
    margin-top: 20px;
`
export const AddressContainer = styled.div`
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    gap:8px;
    padding: 16px;
`
export const AddressLabel = styled.span`
    width: 100%;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Address = styled.span`
    width: 100%;
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.39px;
`
export const EmptyCart = styled.div`
    width: 100%;
    opacity: 0.89;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    padding:12px;
    margin-bottom: 45px;
    margin-top: 8px;
`
export const RestaurantInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap:8px;
`
export const Name = styled.span`
    font-size: 16px;
    letter-spacing: -0.39px;
    color:#5cb646;
`
export const Infos = styled.span`
    font-size: 16px;
    letter-spacing: -0.39px;
    color:#b8b8b8;
`
export const InfoContainer = styled.div`
    padding: 0 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`
export const RightText = styled.p`
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: right;
`
export const SubTotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
`
export const SubTotal = styled.p`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.43px;
    color: #5cb646;
`
export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px 0;
    flex-grow: 1;
`
export const PaymentTitle = styled.p`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 8px 0;
    border-bottom: 1px solid;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-bottom: 11px;
`

export const CardsContainer = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap:8px;
    margin-bottom: 16px;
`

export const BoxLabel = styled(Box)({
    fontSize: '16px',
    letterSpacing: '-0.39px',    
});
export const ButtonCart = styled(Button)({
    width: '100%',
    fontSize: '16px',
    letterSpacing: '-0.39px',
    padding: '12px',
});

export const ButtonContainer = styled.div`
    display: flex;
    align-items: end;
    flex-grow: 1;
    width: 100%;
    padding: 16px;
    margin-bottom: 49px;
`