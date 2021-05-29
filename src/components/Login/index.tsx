import  Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import  Main  from 'components/Main'
import React from 'react'
import * as S from './styles'


const Login = ({ signin } : {
  signin(): void;
}) => (
  <>
  <Main justify="center" className="login-router" id="login">
    <S.WrapperTitle>
       <S.GreetingTitle>Olá!</S.GreetingTitle>
       <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
     </S.WrapperTitle>

     <S.Form>
    <Input  type="email" placeholder="Email" icon="email"/>
    <Input  type="password" placeholder="Senha" icon="password"/>
     <Button id="button-login" onClick={ () => signin()}>Entrar</Button>
     </S.Form>


  </Main>

  <FooterRedirect href="/register" primaryText="Não" name="Criar conta" />
  <FooterRedirect href="/sigin" primaryText="Já" name="Faça o login" />
</>
)

export default Login
