
import Router from 'next/router';

import Button from 'components/Button'
import ButtonSecundary from 'components/ButtonSecundary'
import * as S from './styles'
import { Main } from 'components/Main/styles';

const Welcome = () => (
  <S.Wrapper>

   <S.Background src="/img/background.png" alt="background img" />


    <Main>
    <S.Logo src="/img/Logo-Gavea.png" alt="logo gavea" />

     <S.WrapperSectionWelcome>
     <S.WelcomeTitle>
     Bem-vindo a sua bolsa digital de commodities
     </S.WelcomeTitle>

    <Button onClick={() => Router.push('/sigin')}>
      Entrar
    </Button>

    <ButtonSecundary   onClick={() => Router.push('/register')}>
     cadastrar
    </ButtonSecundary>
     </S.WrapperSectionWelcome>
     </Main>
  </S.Wrapper>
)

export default Welcome
