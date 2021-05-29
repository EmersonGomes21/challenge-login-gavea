import Button from 'components/Button'
import FooterRedirect from 'components/FooterRedirect'
import Input from 'components/Input'
import Main from 'components/Main'
import React from 'react'
import * as S from './styles'

const SignUp = () => (
  <>
    <Main justify="center" className="login-router" id="login">
      <S.WrapperTitle>
        <S.WelcomeTitle>Criar Conta</S.WelcomeTitle>
      </S.WrapperTitle>

      <S.Form>
        <Input type="text" placeholder="Nome completo" icon="user" />
        <Input type="email" placeholder="Email" icon="email" />
        <Input type="password" placeholder="Senha" icon="password" />
        <Input type="password"
        placeholder="Confirmar Senha"
         icon="password" classInput="last"
         />
        <Button
          id="button-register"
          onClick={() => {}}
          buttonText="Cadastrar"
        />
      </S.Form>
    </Main>

    <FooterRedirect href="/signin" primaryText="já" name="Faça login" />
  </>
)

export default SignUp
