import React, { useEffect, useState, useContext} from "react";
import { MainContainer, SearchContainer, Headers, Icon, Back, Main } from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import {CardImageF} from "../../components/card/Card"
import { GlobalContext } from '../../global/GlobalContext'

const SearchPage = () => {
   const {states, setters} = useContext(GlobalContext); 
    const {filter} = states; 
    const {setFilter} = setters; 
   
    const [inicial, setInicial] = useState(true)
    const [active, setActive] = useState(false)
    const Handler = (e) =>{
        setFilter(e.target.value)
    }
  
    useEffect(()=>{
        if(filter.length > 0){
            setInicial(false)
            setActive(true)
        }else if(filter.length === 0){
            setActive(false)
            setInicial(true)
        }
    },[filter])
    const Return = () =>{
      setFilter("")
    }
  return (
    <MainContainer>
      <Headers>
        <div className="div">
          <Link to="/" onClick={()=>Return()}>
            <Back>
                <ArrowBackIosIcon />
            </Back>
          </Link>
          <p>Busca</p>
        </div>
        <hr />
      </Headers>
      <SearchContainer>
        <Icon>
          <svg
            fill="#b8b8b8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </Icon>
        <input placeholder="Restaurante" onChange={Handler} autoFocus />
      </SearchContainer>
      <Main>
        {inicial &&(
        <p className="central">Busque por nome de restaurante</p>
        )}
        {active &&(
        <CardImageF/>
        )}
      </Main>
    </MainContainer>
  );
};

export default SearchPage;