import  Button from 'components/Button'
import Input from 'components/Input'
import  Main  from 'components/Main'
import React from 'react'
import * as S from './styles'


const Login = ({ signin } : {
  signin(): void;
}) => (
  <Main>
    <S.WrapperTitle>
       <S.GreetingTitle>Olá!</S.GreetingTitle>
       <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
     </S.WrapperTitle>

     <S.Form>
    <Input  type="email" placeholder="Email" icon="email"/>
    <Input  type="password" placeholder="Senha" icon="password"/>


     <Button onClick={ () => signin()}>Entrar</Button>
     </S.Form>

  </Main>

)

export default Login
