import styled from "styled-components";
import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from "@mui/material";

export const Navbar=styled(BottomNavigation)`
    width:100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #b8b8b8;
    
    .MuitButtonBase-root{
    width: 120px;
  height: 49px;
  padding: 11px 46px 11px 47px;
  color: #5cb646;
  }
  
  `
   
   export const MenuIcons = styled(BottomNavigationAction)`
   
   .MuitButtonBase-root{
    width: 120px;
    height: 49px;
    padding: 11px 46px 11px 47px;
    color: #5cb646;
  }
  .MuiSvgIcon-root{
    color:#b8b8b8;
   
  }
   
   
   `
