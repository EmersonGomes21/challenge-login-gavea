import Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import Main from 'components/Main'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import cookie from 'js-cookie'
import api from 'utils/lib/api'
import firebase from 'firebase'
import Router from 'next/router'

interface User {
  uid: string
  email: string
  name: string
  token: string
  provider: string | undefined
  photoUrl: string
}
const Login = () => {
  //definem valores dos inputs através do Onchange
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<null | boolean>(null)
  const [user, setUser] = useState<User | null | boolean>(null)
  const [userLogado, setUserLogado] = useState<string | undefined | null>('')
  const [focus, setFocus] = useState<null | boolean>(null)

  const [dataError] = useState({
    message:
      'Erro ao fazer login, e-mail inválido ou mau funcionamento do servidor  😥!',
    color: '#FF6900',
    messaGem: 'error'
  })
  const [dataSuccess] = useState({
    message: 'Login efetuado com sucesso! 😍',
    color: '#27cf2f',
    messaGem: 'successe'
  })

  const formatUser = async (user: any) => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.za,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  })

  const handleUser = async (currentUser: any) => {
    if (currentUser) {
      console.log('currentUser', currentUser)
      const formatedUser = await formatUser(currentUser)
      setUser(formatedUser)
      setSession(true)
      return formatedUser.email
    }
    setUser(false)
    setSession(false)
    return false
  }

  const setSession = (session: any) => {
    if (session) {
      cookie.set('gavea-auth', session, {
        expires: 1
      })
    } else {
      cookie.remove('gavea-auth')
    }
  }

  const loginEmailPassword = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (password === '' || email === '') {
      alert('todos os campos são requeridos!')
      return
    } else if (password.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres!')
      return
    }

    var res = await api.emailPasswordSignin(email, password)

    if (!res || res == undefined || res == null) {
      setError(true)
      //oculta a mensagem após 3 segundos
      window.setTimeout(() => setError(null), 3000)
      return
    } else {
      handleUser(res)
      setError(false)
      window.setTimeout(() => Router.push('/home'), 3000)
    }

    console.log('resLogin', res)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const nameUser = window.localStorage.getItem('@gavea-name-user')
    setUserLogado(nameUser)
    if (
      !nameUser ||
      nameUser == undefined ||
      nameUser == null ||
      nameUser == ''
    ) {
      handleUser(false)
    }
  }, [userLogado])

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
            onFocus={(e) => setFocus(true)}
          />
          <Button id="button-login" onClick={loginEmailPassword} />

          <S.Alert>
            <S.Span
              className={error && error !== null ? `register-error` : `hide`}
            >
              {dataError.message}
            </S.Span>

            <S.Span
              className={!error && error !== null ? `register-success` : `hide`}
            >
              {dataSuccess.message}
            </S.Span>
          </S.Alert>
        </S.Form>
      </Main>

      <FooterRedirect href="/register" primaryText="Não" name="Criar conta" />
    </>
  )
}

export default Login
