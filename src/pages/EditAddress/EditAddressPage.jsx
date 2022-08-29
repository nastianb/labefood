import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as Yup from 'yup'; 
import {useProtectedPage} from '../../hooks/useProtectedPage'
import { Button,Alert, Snackbar } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { BaseUrl } from '../../constants/api';
import loading from '../../assets/myLoading.svg';
import {GlobalContext} from '../../global/GlobalContext'
import { EditAddressPageContentDiv, EditAddressPageFormDiv, EditAddressPageMainDiv, GreyBorderTextField, LoadingDiv, LoadingScreenDiv } from './styled';
import axios from 'axios';
import splash from '../../assets/splash.png'
import { getUserAddress, attemptEditAddress } from '../../services/requests';

const  EditAddressPage = () => {
  const navigate = useNavigate(); 
  const {states, setters} = useContext(GlobalContext); 
  const [open, setOpen] = useState(false);
  const [openSuccess,setOpenSuccess] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [userAddress, setUserAddress] = useState({}); 


  useProtectedPage(); 

 //useEffect de startup, pega token e endereco
  useEffect( ()=>{
    let token = window.sessionStorage.getItem('token'); 
    getUserAddress(`profile/address`,token, setOpen, setMessageError, setUserAddress)
  },[])

   //funcao de fechar pop-up de sucesso ou erro de requisicao
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
    setOpenSuccess(false)
};


//ternario para nao mostrar tela ate tela estiver carregado endereço
  return ( userAddress && userAddress.city ?
    (<EditAddressPageMainDiv>
      <Header title="Endereço"/>

      <EditAddressPageContentDiv>
      <EditAddressPageFormDiv>
      {/* Formik é a biblioteca usada  */}
        <Formik
        initialValues={{
          street: userAddress.street,
          number: userAddress.number,
          complement: userAddress.complement === null? '' : userAddress.complement, 
          neighbourhood: userAddress.neighbourhood,
          city: userAddress.city, 
          state: userAddress.state,
        }}

        validationSchema = {Yup.object({
          street: Yup.string('Insira a sua rua')
          .min(3, "Mínimo 3 caracteres")
          .max(40, "Máximo 40 caracteres")
          .required('Campo obrigátorio'),
          number: Yup.number('Insira o numero da sua rua') 
          .min(1, 'Tem que ser maior que 1')
          .max(10000, 'Nao pode ser maior que 10000')
          .required('Campo obrigátorio'),
          complement: Yup.string('Insira o complemento')
          .nullable(true)
          .max(15, 'maximo 15 caracteres'),
          neighbourhood: Yup.string('Insira o seu bairro')
          .min(3, "Mínimo 3 caracteres")
          .max(25, "Máximo 25 caracteres")
          .required('Campo obrigátorio'),
          city: Yup.string('Insira o nome da sua cidade')
          .min(3, "Mínimo 3 caracteres")
          .max(30, "Máximo 30 caracteres")
          .required('Campo obrigátorio'),
          state: Yup.string('Insira o nome do seu estado')
          .min(2, "Mínimo 2 caracteres")
          .max(30, "Máximo 30 caracteres")
          .required('Campo obrigátorio'),

        })}

        onSubmit = {(values,actions) => {

          let body = {
          street: values.street,
          number: Number(values.number),
          neighbourhood: values.neighbourhood ,
          city: values.city, 
          state: values.state,
          complement: values.complement, 
          }

         let token = window.sessionStorage.getItem('token')
         let answer = attemptEditAddress('address',body,token, setOpen, setMessageError); 

         answer.then( (response) => { 
          window.sessionStorage.setItem("token", response.data.token)
           setOpenSuccess(true); 
           actions.setSubmitting(false)
         }).catch( (error) => {
          actions.setSubmitting(false)
      })
        }}
        >
          { (props) => {
            return(
              <Form>
                 <Field name ="street">
                     {({field, form}) => (
                      <GreyBorderTextField
                      {...field}
                      fullWidth
                      label="Logradouro*"
                      variant='outlined'
                      placeholder='Rua / Av'
                      type='text'
                      focused
                      value={form.values.street}
                      onChange={form.handleChange}
                      error={form.touched.street && Boolean(form.errors.street)}
                      helperText={form.touched.street && form.errors.street}
                    />
                  )}
                </Field>

                <Field name ="number">
                  {({ field, form }) => (
                    <GreyBorderTextField
                      {...field}
                      fullWidth
                      sx={{
                        marginTop: '16px',
                      }}
                      label="Número*"
                      variant='outlined'
                      placeholder='Número'
                      type='text'
                      focused
                      value={form.values.number}
                      onChange={form.handleChange}
                      error={form.touched.number && Boolean(form.errors.number)}
                      helperText={form.touched.number && form.errors.number}
                    />
                  )}
                </Field>

                <Field name ="complement">
                  {({ field, form }) => (
                    <GreyBorderTextField
                      {...field}
                      fullWidth
                      sx={{
                        marginTop: '16px',
                      }}
                      label="Complemento"
                      variant='outlined'
                      placeholder='Apto. /Bloco'
                      type='text'
                      focused
                      value={form.values.complement}
                      onChange={form.handleChange}
                      error={form.touched.complement && Boolean(form.errors.complement)}
                      helperText={form.touched.complement && form.errors.complement}
                    />
                  )}
                </Field>

                <Field name ="neighbourhood">
                  {({ field, form }) => (
                    <GreyBorderTextField
                      {...field}
                      fullWidth
                      sx={{
                        marginTop: '16px',
                      }}
                      label="Bairro*"
                      variant='outlined'
                      placeholder='Bairro'
                      type='text'
                      focused
                      value={form.values.neighbourhood}
                      onChange={form.handleChange}
                      error={form.touched.neighbourhood && Boolean(form.errors.neighbourhood)}
                      helperText={form.touched.neighbourhood && form.errors.neighbourhood}
                    />
                  )}
                </Field> 

                <Field name ="city">
                  {({ field, form }) => (
                    <GreyBorderTextField
                      {...field}
                      fullWidth
                      sx={{
                        marginTop: '16px',
                      }}
                      label="Cidade*"
                      variant='outlined'
                      placeholder='Cidade'
                      type='text'
                      focused
                      value={form.values.city}
                      onChange={form.handleChange}
                      error={form.touched.city && Boolean(form.errors.city)}
                      helperText={form.touched.city && form.errors.city}
                    />
                  )}
                </Field>

                <Field name ="state">
                  {({ field, form }) => (
                    <GreyBorderTextField
                      {...field}
                      fullWidth
                      sx={{
                        marginTop: '16px',
                      }}
                      label="Estado*"
                      variant='outlined'
                      placeholder='Estado'
                      type='text'
                      focused
                      value={form.values.state}
                      onChange={form.handleChange}
                      error={form.touched.state && Boolean(form.errors.state)}
                      helperText={form.touched.state && form.errors.state}
                    />
                  )}
                </Field>

                { props.isSubmitting ? 
                    <LoadingDiv>
                        <img alt='loading' src={loading}/>
                    </LoadingDiv>
                          :
                    <Button 
                      variant='contained'
                      fullWidth
                      disableElevation
                      type='submit'
                      sx={{
                           marginTop: '16px',
                           textTransform:"none",
                           borderRadius: '0px',                   
                                }}
                    >Salvar</Button>
                 }
              </Form>
            )
          }}

        </Formik>

      </EditAddressPageFormDiv>
      </EditAddressPageContentDiv>

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
                    {"Endereço atualizado com sucesso!"}
                </Alert>
            </Snackbar> 


      </EditAddressPageMainDiv>) : (<LoadingScreenDiv>
        <img alt='loading screen' src={splash} /> 
    </LoadingScreenDiv>)
  )
}

export default EditAddressPage;