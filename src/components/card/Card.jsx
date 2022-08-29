import * as React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useEffect, useContext } from "react";
import {GlobalContext} from '../../global/GlobalContext'
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../routes/cordinator";

const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
const CardMeal = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 45.5vw;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 7px;

  img {
    width: 79.5vw;
    height: 29vw;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
  .Restaurante {
    width: 90%;
    margin: 2.7vw 4vw 1vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
  }
  .Tempo-de-entrega {
    width: 40%;
    margin: 1vw 2vw 0 4vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
  .Taxa-de-entrega {
    width: 43%;
    margin: 1vw 4vw 0 2vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
  }
`;
const Delivery = styled.div`
  display: flex;
`
export const CardImageF = () => {
  const [rest, setRest] = useState([]);
  const {states} = useContext(GlobalContext); 
  const {filter} = states; 
  const navigate = useNavigate(); 

  const getRest = () => {
    const token =
     window.sessionStorage.getItem('token'); 
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {
       
      });
  };

  useEffect(() => {
    getRest();
  }, []);
  
  const filteredList = filter ? rest.filter(({
    name
  }) => name.toUpperCase().includes(filter.toUpperCase())) : rest;
  

  const listRest = filteredList.map((res) => {
    return (
      <div key={res.id} onClick={() => goToRestaurant(navigate, res.id)}>
        <Container>
        <CardMeal>
          <div>
            <img src={res.logoUrl} alt="food" />
          </div>
          <div>
            <h4 className="Restaurante">{res.name}</h4>
          </div>
          <Delivery>
            <p className=" Tempo-de-entrega">{res.deliveryTime} Min</p>
            <p className="Taxa-de-entrega">Frete R${res.shipping},00</p>
          </Delivery>
        </CardMeal>
      </Container>
      </div>
    );
  });

  return <>{listRest}</>;
};

export const CardImageH = () => {
  const [rest, setRest] = useState([]);
  const {states} = useContext(GlobalContext); 
  const {filter} = states; 
  const navigate = useNavigate(); 

  const getRest = () => {
    const token = window.sessionStorage.getItem('token')
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getRest();
  }, []);
  const filteredList = filter ? rest.filter(({
    category
  }) => category.toUpperCase().includes(filter.toUpperCase())) : rest;

  const listRest = filteredList.map((res) => {
    
    return (
      <div key={res.id} onClick={() => goToRestaurant(navigate, res.id)}>
        <Container >
        <CardMeal>
          <div>
            <img src={res.logoUrl} alt="food" />
          </div>
          <div>
            <h4 className="Restaurante">{res.name}</h4>
          </div>
          <Delivery>
            <p className=" Tempo-de-entrega">{res.deliveryTime} Min</p>
            <p className="Taxa-de-entrega">Frete R${res.shipping},00</p>
          </Delivery>
        </CardMeal>
      </Container>
      </div>
    );
  });

  return <>{listRest}</>;
};