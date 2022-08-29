import styled from "styled-components"

export const MainContainer = styled.div`
background-color: #fff;
height: 100vh;
width: 100%;
padding-bottom: 4%;
overflow-x: hidden;
`

export const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2.1% 0;
input{
    width: 91%;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    padding-left: 56.3px;
}
`
export const Icon = styled.div`
position: relative;
display: flex;
    svg{
        position: absolute;
        align-self: center;
        margin-left: 17px;
        width: 24px;
        height: 24px;
    }
`

export const Headers = styled.div`
position: relative;
display: flex;
height: 44px;
width: 100%;
hr{
    width: 100%;
    border: 0;
    height: 0.5px;
    background-color: #b8b8b8;
    align-self: flex-end;
}
.div{
    display: flex;
    text-align: center;
}
.Link{
    position: absolute;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    background-color: red;
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
}
p{
    width: 100%;
    position: absolute;
    align-self: center;
    justify-self: center;
    letter-spacing: -0.39px;
}
`


export const Back = styled.div`
position: absolute;
z-index: 2;
display: flex;
align-items: center;
width: fit-content;
height: 43px;
margin-left: 16px;
svg{
        color: #000;
        align-self: center;
        width: 24px;
        height: 24px;
}
`

export const Main = styled.div`
.central{
    text-align: center;
    margin-top: 4%;
}
`
// export const MainContainer = styled.div`

// `
// export const MainContainer = styled.div`

// `
