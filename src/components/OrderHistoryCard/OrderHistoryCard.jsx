import React, {useState, useEffect} from 'react'
import { MainOrderHistoryCardDiv } from './styled'

const OrderHistoryCard = (props) => {

    const [date, setDate] = useState({}); 
    const [formattedDate, setFormattedDate] = useState(''); 

    const FormatGivenDate = (date) => {

        let day = date.getDate(); 
        let testMonth = date.getMonth(); 
        let month;


        switch (testMonth) {
            case 0:
                month = 'Janeiro';
                break; 
            case 1:
                month = 'Fevereiro';
                break; 
            case 2:
                month = 'Março';
                break; 
            case 3:
                month = 'Abril';
                break; 
            case 4:
                month = 'Maio';
                break; 
            case 5:
                month = 'Junho';
                break; 
            case 6:
                month = 'Julio';
                break; 
            case 7:
                month = 'Agosto';
                break; 
            case 8:
                month = 'Setembro';
                break; 
            case 9:
                month = 'Outubro';
                break; 
            case 10:
                month = 'Novembro';
                break; 
            case 11:
                month = 'Dezembro';
                break; 
            default:
                month = 'Janeiro';
                break; 
        }

        let year = date.getFullYear(); 

        setFormattedDate(`${day} ${month} ${year}`)
    }


    useEffect( ()=>{
         let myDate = new Date(props.order.createdAt); 
         FormatGivenDate(myDate);
    },[])
    //props 
    //restaurantName


  return (
    <MainOrderHistoryCardDiv>
       <h3>{props.order.restaurantName}</h3>
       <h4>{formattedDate.length>0 && formattedDate}</h4>
       <p>SUBTOTAL {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.order.totalPrice)}</p>
        </MainOrderHistoryCardDiv>
  )
}

export default OrderHistoryCard