import  Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import  Main  from 'components/Main'
import React, { useState } from 'react'
import * as S from './styles'

import api from 'utils/lib/api'
const Login = (

) =>  {
    //definem valores dos inputs através do Onchange
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginEmailPassword = async (e : React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log('result email', email);
      console.log('result email', password);

      let res  =   await api.emailPasswordSignin(email, password);

      console.log('res', res);
      // const newUser = {
      //   id: u.uid,
      //   name: u.displayName,
      //   avatar: u.photoURL,
      //   email: u.email
      // }


      // if (typeof window !== "undefined") {
      //   const setUserStorage = () => {
      //     const userDataJSON = JSON.stringify(newUser);
      //     if (newUser) {
      //        localStorage.setItem('@user-data', userDataJSON);
      //        localStorage.setItem('@weser/connected', 'true');
      //     }
      //   }
      //   setUserStorage();
      //   }

    }

     // console.log(localStorage.getItem('@user-data'));


  return (
    <>
    <Main justify="center" className="login-router" id="login">
      <S.WrapperTitle>
         <S.GreetingTitle>Olá!</S.GreetingTitle>
         <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
       </S.WrapperTitle>

       <S.Form>
      <Input  type="email" placeholder="Email" icon="email" onChange={(e) => setEmail(e.target.value)}/>
      <Input  type="password" placeholder="Senha" icon="password" classInput="last" onChange={e => setPassword(e.target.value)} />
       <Button  id="button-login" onClick={ loginEmailPassword }  />
       </S.Form>

    </Main>

    <FooterRedirect href="/register" primaryText="Não" name="Criar conta" />
  </>
  )
}

export default Login
