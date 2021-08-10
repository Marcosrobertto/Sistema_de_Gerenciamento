import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';

import { Container, Logo, DivLogin, Tittle, FormLogin, InputIANES, ButtonIANES } from './styles'

import logo from '../../Imgs/logo.png'

import api from '../../Services/api'


export default function Login() {
  
  const {handleSubmit, register} = useForm();
  const history = useHistory();

  async function Auth(data){

    const response = await api.post('/Login', {

      nome: data.nome,
      cpf: data.cpf,
      senha: data.pwd,
      
    })

    if(response.status === 200){

      console.log('api rodou');
      
      const token = await response.data.token

      localStorage.setItem('tokenuserup', token)

      history.push('/Home')
      
    }
    

  }
  
  return (

    <Container>
      <Logo src={logo} />
      <DivLogin>
        <Tittle>Senai</Tittle>
        <FormLogin onSubmit={handleSubmit(Auth)}>
          <InputIANES type='text' {...register('cpf')} placeholder='CPF' />
          <InputIANES type='text' {...register('nome')} placeholder='Nome' />
          <InputIANES type='password' {...register('pwd')} placeholder='Password' />
          <ButtonIANES type='submit' value='Login' />
        </FormLogin>
      </DivLogin>
    </Container>

  )
}