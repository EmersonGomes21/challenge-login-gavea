import React, { useEffect } from 'react'
import CardCommodities from 'components/CardCommodities'
import CardUser from 'components/CardUser'
import Header from 'components/Header'
import Main from 'components/Main'
import * as S from './styles'
import data from './content'

const HomeList = () => {
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
