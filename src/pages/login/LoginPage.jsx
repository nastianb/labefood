import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {goToSignUp } from '../../routes/cordinator';
import * as Yup from 'yup'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { GreyBorderTextField, LoadingDiv, LoadingScreenDiv, LoginPageContentDiv, LoginPageFormDiv, LoginPageLogoDiv, LoginPageMainDiv } from './styled';
import { Button, InputAdornment, Alert, Snackbar } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import IconButton from '@mui/material/IconButton';
import loading from '../../assets/myLoading.svg';
import {GlobalContext} from '../../global/GlobalContext'
import splash from '../../assets/splash.png'
import { attemptLogin } from '../../services/requests';


const LoginPage = () => {
    const navigate = useNavigate(); 
    const [showPassword, setShowPassword] = useState(false); 
    const {states, setters} = useContext(GlobalContext); 
    const [showLoadingScreen, setShowLoadingScreen] = useState(true); 
    const {user} = states; 
    const [open, setOpen] = useState(false)
    const [messageError, setMessageError] = useState('')

    //useEffect inicial
    useEffect( ()=>{
        const token = window.sessionStorage.getItem('token')
        
        if(token) {
            navigate('/', {replace: true})
        }

        setTimeout(()=> {
            setShowLoadingScreen(false);
        }, 2500)

    },[])
    
    
    //funcao de fechar notificao de requisicao
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    
     //mostrar splash por 2s antes de mostrar formulario de logIn
     return ( showLoadingScreen ? (<LoadingScreenDiv>
        <img alt='loading screen' src={splash} /> 
    </LoadingScreenDiv>) :  
        ( 
        <LoginPageMainDiv>

            <LoginPageLogoDiv>
                <img alt='FutureEats Logo' src={logo}/> 
            </LoginPageLogoDiv>

            <LoginPageContentDiv>
                <h3>Entrar</h3>

                <LoginPageFormDiv>
            {/* Formik foi usado para os formularios e Yup para a validacao */}
                <Formik
                initialValues={{email: "", password: ""}}
                validationSchema = {Yup.object({
                    email: Yup
                    .string('Insira o seu email')
                    .email('Entre um email válido')
                    .required('Campo obrigátorio'), 
                    password: Yup
                    .string('Insira a sua senha')
                    .min(6, 'Mínimo 6 caracteres')
                    .max(25, 'Máximo 25 caracteres')
                    .required('Campo obrigátorio')
                })}

                onSubmit = { (values, actions) => {
                    //codigo de submeter 
                    let body = {
                        email: values.email, 
                        password: values.password
                    }
                    let answer = attemptLogin("login", body, setOpen,setMessageError); 
                    answer.then( (response) => {
                            if(response.data.token)
                            {
                                window.sessionStorage.setItem('user', JSON.stringify(response.data.user))
                                window.sessionStorage.setItem("token", response.data.token)
                                navigate('/', {replace: true}); 
                            }
                        actions.setSubmitting(false)
                        actions.resetForm()
                    }  ).catch( (error) => {
                        actions.setSubmitting(false)
                        actions.resetForm()
                    })    
                }}
                >
                    { (props) => {
                        return (
                            <Form>
                               <Field name ="email">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
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

                               <Field name ="password">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                     
                                       sx={{
                                           marginTop: '16px',
                                           colorScheme: '#b8b8b8 ',
                                           fontFamily: "'Roboto', sans-serif",
                                          
                                       }}
                                       label = "Senha*"
                                       variant = 'outlined'
                                       placeholder='Mínimo 6 caracteres '
                                       focused
                                       type={showPassword ? 'text':'password'}
                                       value={form.values.password}
                                       onChange={form.handleChange}
                                       error={form.touched.password && Boolean(form.errors.password)}
                                       helperText={form.touched.password && form.errors.password}
                                       InputProps={ {  endAdornment: 
                                        <InputAdornment position = "end" >
                                            <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={()=> setShowPassword(!showPassword)}
                                            edge = 'end'       
                                            >
                                                {showPassword ? <VisibilityOff />: <Visibility />}
                                            </IconButton>
                                        </InputAdornment>,
                                       }}
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
                                   
                                }}
                                >Entrar</Button>}
                            </Form>
                        )
                    }}     
                </Formik>
                </LoginPageFormDiv>


            <p id='signUpButton' onClick={()=> goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</p>
            </LoginPageContentDiv>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'top' + 'center'}       
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%'}}>
                    {messageError}
                </Alert>
            </Snackbar> 
           
        </LoginPageMainDiv>
    )
     ) 
}

export default LoginPage