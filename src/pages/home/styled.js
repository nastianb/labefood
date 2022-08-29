import styled from "styled-components"
import AppBar from "@mui/material/AppBar";

export const HomePageMainContainer = styled.div` 
height: auto; 

`

export const Section = styled.div`
  margin-top: 2%;
  height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 6vh;
`;

export const Future = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;

  p{
    font-size: 1em;
    font-weight: 400;
    letter-spacing: -0.39px;
  }
`;
export const AppaBars = styled(AppBar)`
display: flex;
justify-content: center;
align-items: center;
box-shadow: none;
height: 18vh;
width: 100%;
`;