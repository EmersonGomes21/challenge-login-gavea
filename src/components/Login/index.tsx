import Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import Main from 'components/Main'
import React, { useState } from 'react'
import * as S from './styles'
import  AlertModalErro from 'components/AlertModalErro';
import  AlertModalOk from 'components/AlertModalOk';

import api from 'utils/lib/api'

const Login = () => {
  //definem valores dos inputs através do Onchange
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const loginEmailPassword = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    var res = await api.emailPasswordSignin(email, password)
     res = res.email;

    if (!res || res == undefined || res == null) {
      setError(true)
      setSuccess(false)
      console.log('DESLOGADO')
     // alert('ERRO AO LOGAR');
    }
    else {
      console.log('LOGADO')
      setSuccess(true)
      setError(false)
    }

    console.log('resLogin', res)

    menssagemSuccess();
    menssagemError();
  }

  const menssagemSuccess = async ()=> {
    if(success){
      const dataModalSuccess  = {
        title: 'Login efetuado com sucesso!',
        icon: 'success',
        confirmButtonText: false,
        showConfirmButton: false,
        time: 2000

      }

    await AlertModalOk(dataModalSuccess);
    }

  }

  const  menssagemError  = async ()=> {
    if (error) {
      const dataModalError  = {
        title: 'Erro ao logar',
        text: 'Email ou senha não existem. Tente novamente!',
        icon: 'error',
        confirmButtonText: 'OK',
        showConfirmButton: true,
      }
     await AlertModalErro(dataModalError);

    }
  }



  return (
    <>
      <Main justify="center" className="login-router" id="login">
        <S.WrapperTitle>
          <S.GreetingTitle>Olá!</S.GreetingTitle>
          <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
        </S.WrapperTitle>

        <S.Form>
          <Input
            type="email"
            placeholder="Email"
            icon="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon="password"
            classInput="last"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button id="button-login" onClick={loginEmailPassword} />
        </S.Form>
      </Main>

      <FooterRedirect href="/register" primaryText="Não" name="Criar conta" />
    </>
  )
}

export default Login
