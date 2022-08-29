import React from 'react'
import { EditAddressCardMainDiv, EditAddressInfoDiv, EditAddressIconDiv } from './styled'
import editIcon from '../../assets/edit_icon.svg'
import { useNavigate } from 'react-router-dom';

const EditAddressCard = (props) => {
//receive props address
const navigate = useNavigate(); 

  return (
    <EditAddressCardMainDiv>
        <EditAddressInfoDiv>
        {props.address ? <h3>Endereço cadastrado</h3>:null}
        {props.address ? <p>{props.address}</p>:null}
        </EditAddressInfoDiv>
       
        <EditAddressIconDiv>
        { props.address ? <img alt='editIcon' src={editIcon} onClick={()=> {navigate('/profile/address')}}/>: null}
        </EditAddressIconDiv>

        </EditAddressCardMainDiv>
  )
}

export default EditAddressCard