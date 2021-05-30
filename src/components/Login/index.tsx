import  Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import  Main  from 'components/Main'
import React, { useState } from 'react'
import * as S from './styles'

import api from '../../utils/lib/api'
const Login = ( {

}
) =>  {
    //definem valores dos inputs através do Onchange
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e : React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log('result email', user);
      console.log('result email', password);
      let result =   await api.emailPasswordSignin(user, password);
      console.log(result);
    }

  return (
    <>
    <Main justify="center" className="login-router" id="login">
      <S.WrapperTitle>
         <S.GreetingTitle>Olá!</S.GreetingTitle>
         <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
       </S.WrapperTitle>

       <S.Form>
      <Input  type="email" placeholder="Email" icon="email" onChange={(e) => setUser(e.target.value)}/>
      <Input  type="password" placeholder="Senha" icon="password" classInput="last" onChange={e => setPassword(e.target.value)} />
       <Button  id="button-login" onClick={ submit }  />
       </S.Form>

    </Main>

    <FooterRedirect href="/register" primaryText="Não" name="Criar conta" />
  </>
  )
}

export default Login
