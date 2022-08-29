import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { EditUserPageContentDiv, EditUserPageFormDiv, EditUserPageMainDiv,GreyBorderTextField, LoadingScreenDiv} from './styled';
import * as Yup from 'yup'; 
import { Button, Alert, Snackbar  } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import loading from '../../assets/myLoading.svg';
import {GlobalContext} from '../../global/GlobalContext'
import { LoadingDiv } from '../CreateAddress/styled';
import splash from '../../assets/splash.png'
import {useProtectedPage} from '../../hooks/useProtectedPage';
import { getUserInfo, attemptEditUserInfo } from '../../services/requests';


const EditUserPage = () => {

  const navigate = useNavigate(); 
  const [open, setOpen] = useState(false);
  const {states, setters} = useContext(GlobalContext); 
  const {user} = states; 
  const [openSuccess,setOpenSuccess] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [userInfo, setUserInfo] = useState({}); 
  const {setUser} = setters; 

 
useProtectedPage(); 

useEffect( ()=>{
  let token = window.sessionStorage.getItem('token'); 
  let myUser = window.sessionStorage.getItem('user'); 
  let parsedUser = JSON.parse(myUser); 
  getUserInfo(`profile`,token, setOpen, setMessageError, setUserInfo)
  setUser(parsedUser); 

},[])

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
      return;
  }
  setOpen(false);
  setOpenSuccess(false)
};


  return ( userInfo && userInfo.name ? 
    (
      
    <EditUserPageMainDiv>
      <Header title="Editar"/>

      <EditUserPageContentDiv>

        <EditUserPageFormDiv>
        <Formik
                initialValues={{name: userInfo.name, email: userInfo.email, cpf: userInfo.cpf}}

                validationSchema = {Yup.object({
                    name: Yup
                    .string('Insira o seu nome completo')
                    .min(3, "Mínimo 3 caracteres")
                    .max(40, "Máximo 40 caracteres")
                    .required('Campo obrigátorio'), 
                    email: Yup
                    .string('Insira o seu email')
                    .email('Entre um email válido')
                    .required('Campo obrigátorio'), 
                    cpf: Yup
                    .string('Insira o seu cpf')
                    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Formato: 000.000.000-00")
                    .required('Campo obrigátorio'), 
                })}

                onSubmit = { (values, actions) => {
                    //codigo de submeter 
                    let body = {
                        name: values.name,
                        email: values.email, 
                        cpf: values.cpf,
                    }

                    let token = window.sessionStorage.getItem('token')
                    let answer = attemptEditUserInfo('profile',body,token, setOpen, setMessageError); 
           
                    answer.then( (response) => { 
                      setOpenSuccess(true); 
                      window.sessionStorage.setItem('user', JSON.stringify(response.data.user))
                      actions.setSubmitting(false)
                    }).catch( (error) => {
                     actions.setSubmitting(false)
                 })           
                }}
                >
                    { (props) => {
                        return(
                            <Form>
                                 <Field name ="name">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       label = "Nome*"
                                       variant = 'outlined'
                                       placeholder='Nome e sobrenome'
                                       type='text'
                                       focused
                                       value={form.values.name}
                                       onChange={form.handleChange}
                                       error={form.touched.name && Boolean(form.errors.name)}
                                       helperText={form.touched.name && form.errors.name}
                                       />
                                   )}
                               </Field>

                                 <Field name ="email">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       sx={{
                                        marginTop: '16px',
                                    }}
                                       label = "E-mail*"
                                       variant = 'outlined'
                                       placeholder='email@email.com'
                                       type='email'
                                       focused
                                       value={form.values.email}
                                       onChange={form.handleChange}
                                       error={form.touched.email && Boolean(form.errors.email)}
                                       helperText={form.touched.email && form.errors.email}
                                       />
                                   )}
                               </Field>

                               <Field name ="cpf">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       sx={{
                                        marginTop: '16px',
                                             }}
                                       label = "CPF*"
                                       variant = 'outlined'
                                       placeholder='000.000.000-00'
                                       type='text'
                                       focused
                                       value={form.values.cpf}
                                       onChange={form.handleChange}
                                       error={form.touched.cpf && Boolean(form.errors.cpf)}
                                       helperText={form.touched.cpf && form.errors.cpf}
                                       />
                                   )}
                               </Field>

                               { props.isSubmitting ? <LoadingDiv>
                                   <img alt='loading' src={loading}/>
                               </LoadingDiv>:
                               <Button 
                               variant='contained'
                                fullWidth
                                disableElevation
                                type='submit'
                                sx={{
                                    marginTop: '16px',
                                    textTransform:"none",
                                    borderRadius: '0px',
                                   
                                }}>Salvar</Button>}
                            </Form>
                        )}}
                </Formik>
        </EditUserPageFormDiv>
      </EditUserPageContentDiv>

       {/* pop ups de erros e sucesso */}
           <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'top' + 'center'}
            >
                <Alert onClose={handleClose} severity="warning" sx={{  width: '100%' }}>
                    {messageError}
                </Alert>
            </Snackbar> 

            <Snackbar
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'2'}
            >
                <Alert onClose={handleClose} severity="success" sx={{  width: '100%' }}>
                    {"Usuário atualizado com sucesso!"}
                </Alert>
            </Snackbar> 
    </EditUserPageMainDiv>
    
    ) 
    : (<LoadingScreenDiv>
      <img alt='loading screen' src={splash} /> 
  </LoadingScreenDiv>)
  )
}

export default EditUserPage