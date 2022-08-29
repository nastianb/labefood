import  React, { useEffect, useState } from "react";
// import AppBar from "@mui/material/AppBar";
import { CardImageH } from "../../components/card/Card";
import SearchAppBar from "../../components/SearchBar/SearchBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { HomePageMainContainer, Section } from "./styled";
import { PopUp } from "../../components/popUp/PopUp";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Header from '../../components/Header/Header';
import { getUserInfoStart } from "../../services/requests";

const HomePage = () => {

  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  useEffect( ()=> {
    let token = window.sessionStorage.getItem('token'); 
    getUserInfoStart('profile',token, setLoggedUserInfo)
  },[])

  useEffect( ()=>{
    if (loggedUserInfo)
    {
      window.sessionStorage.setItem('user', JSON.stringify(loggedUserInfo))
    }
  },[loggedUserInfo])


  useProtectedPage(); 
 
  return (
    <HomePageMainContainer>
      <Header title="FutureEats" hideBackButton={true}/>

      <SearchAppBar />

      <Section>
        <CardImageH />
      </Section>

      <PopUp/>
      
      <NavigationBar />
    </HomePageMainContainer>
  );
};

export default HomePage;
