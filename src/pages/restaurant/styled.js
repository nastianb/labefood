import styled from "styled-components"
import { primaryColor } from "../../theme/colors"

export const PageContainer = styled.div`
    max-width: 100vw;
`

export const RestaurantContainer = styled.div`
    padding: 16px;
    display:flex;
    flex-direction: column;
    gap:12px;
    width: 100%;
`

export const Logo = styled.img`
    width: 100%;
    height: 120px;
    object-fit:cover;
    border-radius: 8px 8px 0px 0px;
`

export const RestaurantInfo = styled.div`
    display:flex;
    flex-direction: column;
    gap:8px;
`
export const Name = styled.span`
    font-size: 16px;
    letter-spacing: -0.39px;
    color:${primaryColor};
`
export const Infos= styled.span`
    color:#b8b8b8;
    font-size: 16px;
    letter-spacing: -0.39px;
`
export const InfoDiv = styled.div`
    display:flex;
    gap:25px;

`

export const Categories = styled.div`
    width: 100%;
`
export const CategoryTitle = styled.p`
    margin-top: 8px;
    padding-bottom: 8px;
    width: 100%;
    border-bottom: solid 1px;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
    margin-top: 8px;
`
