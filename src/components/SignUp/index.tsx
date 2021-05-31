import React, { useState } from 'react'
import Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import Main from 'components/Main'
import * as S from './styles'
import api from 'utils/lib/api'

const SignUp = () => {
  //definem valores dos inputs através do Onchange
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setErro] = useState<boolean | null>(null)
  const [errorPassword, setErroPassword] = useState(false)

  const [dataError] = useState({
    message: 'Erro ao cadastrar, e-mail inválido ou já conta no sistema!',
    color: '#FF6900',
    messaGem: 'error'
  })
  const [dataSuccess] = useState({
    message: 'Conta criada com sucesso!',
    color: '#27cf2f',
    messaGem: 'successe'
  })

  const createUser = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (password === '' || confirmPassword === '') {
      alert('todos os campos são requeridos!')
      return
    }
    if (password !== confirmPassword) {
      setErroPassword(true)
      alert('As senhas são divergentes!')
      return
    } else if (password.length < 6 || confirmPassword.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres!')
      return
    }

    let result = await api.emailPasswordRegister(email, password, user)
    if (result.email) {
      //LOGOU
      setErro(false)
      //depois de 3 segundos redireciona o usuario
      window.setTimeout(() => api.loGout('/signin'), 3000)

    }
    else{
      setErro(true);
      window.setTimeout(() => setErro(null), 4000)
    }
    //desloga
  }

  return (
    <>
      <Main justify="center" className="login-router" id="login">
        <S.WrapperTitle>
          <S.WelcomeTitle>Criar Conta</S.WelcomeTitle>
        </S.WrapperTitle>

        <S.Form>
          <Input
            type="text"
            placeholder="Nome completo"
            icon="user"
            onChange={(e) => setUser(e.target.value)}
          />
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            icon="password"
            classInput="last"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            id="button-register"
            onClick={createUser}
            buttonText="Cadastrar"
          />

          <S.Alert>
            <S.Span className={(error && error !== null) ? `register-error` : `hide`}>
              {dataError.message}
            </S.Span>

            <S.Span className={(!error && error !== null) ? `register-success` : `hide`}>

              {dataSuccess.message}
            </S.Span>
          </S.Alert>
        </S.Form>
      </Main>
      <FooterRedirect href="/signin" primaryText="já" name="Faça login" />
    </>
  )
}

export default SignUp
