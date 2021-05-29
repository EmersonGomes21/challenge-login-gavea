import CardCommodities from 'components/CardCommodities'
import CardUser from 'components/CardUser'
import Header from 'components/Header'
import Main from 'components/Main'
import React from 'react'
import * as S from './styles'

const HomeList = () => {
  const data = [
    { part: 'AgAmerica', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'TrFood', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'GOSC', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'AgCerr', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'Agro1001', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'AgAmerica', pag: 'Fev/21', ton: 2.0, value: 164.5 },
    { part: 'TrFood', pag: 'Fev/21', ton: 2.0, value: 145.5 }
  ]
  return (
    <>
      <Header />
      <Main justify="flex-start">
        <CardUser />
        <S.WrapperLabels>
          <S.Label>Part</S.Label>
          <S.Label>Pag</S.Label>
          <S.Label>Ton</S.Label>
          <S.Label>R$</S.Label>
        </S.WrapperLabels>

        {data.map((item, indice) => (
          <CardCommodities
            key={indice}
            part={item.pag}
            pag={item.pag}
            ton={item.ton}
            value={item.value}
          />
        ))}
      </Main>
    </>
  )
}

export default HomeList
