import styled from "styled-components"

export const MainContainer = styled.div`
position: absolute;
display: grid;
grid-template-rows: 1.8fr 1fr;
align-items: center;
bottom: 0;
height: 167px;
width: 100%;
background-color: #5cb646;
    svg{
        fill: #fff;
        font-size: 42px;
    }
.space{
    height: 56px;
    width: 100%;
}
.content{
    display: flex;
    background-color: #5cb646;
}
.first{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%; 
}
.second{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 45%;
    height: 100%;
}
.line1{
    color: #fff;
}
.line2{

}
.line3{
    font-weight: bold;
}
`