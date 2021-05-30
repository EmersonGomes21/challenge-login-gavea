import CardCommodities from 'components/CardCommodities'
import CardUser from 'components/CardUser'
import Header from 'components/Header'
import Main from 'components/Main'
import React from 'react'
import * as S from './styles'

const HomeList = () => {
  const data = [
    { part: 'AgAmerica', pag: 'Fev/21', ton: '2.000', value: '164.5', operation: 'positivo', iconUrl: 'avatar01.svg' },
    { part: 'TrFood', pag: 'Fev/21', ton: '2.000', value: '164.5', operation: 'positivo', iconUrl: 'avatar02.svg' },
    { part: 'GOSC', pag: 'Fev/21', ton: '2.000', value: '164.5' , operation: 'negativo' , iconUrl: 'avatar03.svg'},
    { part: 'AgCerr', pag: 'Fev/21', ton: '2.000', value: '164.5', operation: 'negativo', iconUrl: 'avatar04.svg' },
    { part: 'Agro1001', pag: 'Fev/21', ton: '2.000', value: '164.5', operation: 'positivo', iconUrl: 'avatar05.svg' },
    { part: 'AgAmerica', pag: 'Fev/21', ton: '2.000', value: '164.5', operation: 'positivo' , iconUrl: 'avatar06.svg'  },
    { part: 'TrFood', pag: 'Fev/21', ton: '2.000', value: '145.5', operation: 'positivo', iconUrl: 'avatar02.svg' }
  ]
  return (
    <>
      <Header />
      <Main justify="flex-start">
        <CardUser />
        <S.WrapperLabels>
          <S.Label className="part">Part</S.Label>
          <S.Label className="pag">Pag</S.Label>
          <S.Label className="ton">Ton</S.Label>
          <S.Label className="value">R$</S.Label>
        </S.WrapperLabels>
<S.WrapperCardCommodities>
        {data.map((item, indice) => (
          <CardCommodities
            key={indice}
            part={item.part}
            pag={item.pag}
            ton={item.ton}
            value={item.value}
            operation={item.operation}
            iconUrl={item.iconUrl}
          />
        ))}
        </S.WrapperCardCommodities>
      </Main>
    </>
  )
}

export default HomeList
