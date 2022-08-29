import React, { useState, useEffect } from 'react'
import { EditUserCardMainDiv, EditUserNameDiv, EditUserEmailDiv, EditUserCpfDiv } from './styled'
import editIcon from '../../assets/edit_icon.svg'
import { useNavigate } from 'react-router-dom'

const EditUserCard = (props) => {
    const navigate = useNavigate(); 

  return (
      
        <EditUserCardMainDiv >
            <EditUserNameDiv>
            <p>{props.user.name}</p>
            <img alt='editIcon' src={editIcon} onClick={()=> {navigate('/profile/user')}}/>
            </EditUserNameDiv>
            
            <EditUserEmailDiv>
            <p>{props.user.email}</p>
            </EditUserEmailDiv>

            <EditUserCpfDiv>
            <p>{props.user.cpf}</p>
            </EditUserCpfDiv>
        </EditUserCardMainDiv> 
         

  )
}

export default EditUserCard