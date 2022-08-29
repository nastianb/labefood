import React, { useEffect, useState } from "react";
import { MainContainer } from "./PopoUpStyle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getActiveOrder } from "../../services/requests";

export const PopUp = () => {


  let [activeOrder, setActiveOrder] = useState(null); 

  useEffect(()=>{
    let token = window.sessionStorage.getItem('token'); 

    getActiveOrder(`active-order`, token, setActiveOrder)

  },[activeOrder])

  let expireDate = new Date(Date.now())
  if(activeOrder && activeOrder.expiresAt)
  {
    let expirationDate = new Date(activeOrder.expiresAt)
    if(expireDate === expirationDate)
    {
      setActiveOrder(null); 
    }
  }
  
  return (
   activeOrder &&  <MainContainer>
      <div className="content">
        <div className="first">
          <AccessTimeIcon />
        </div>
        <div className="second">
          <p className="line1">Pedido em andamento</p>
          <p className="line2">{activeOrder.restaurantName}</p>
          <p className="line3">SUBTOTAL {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(activeOrder.totalPrice)}</p>
        </div>
      </div>
      
    </MainContainer>
  );
};
