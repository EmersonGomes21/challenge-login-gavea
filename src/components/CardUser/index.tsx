import React from 'react'
import * as S from './styles'

const CardUser = () => (
  <S.Wrapper>
    <S.Avatar  src="icons/avatar/avatar01.svg" alt="avatar user" />
    <S.WrapperUserName>
      <S.Title>Olá, <S.UserName>Francisco</S.UserName> </S.Title>
      <S.Company>Gavea Marketplace</S.Company>
    </S.WrapperUserName>
  </S.Wrapper>
)

export default CardUser
