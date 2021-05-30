import React, { useEffect, useState } from 'react'
import api from 'utils/lib/api';
import * as S from './styles'


const CardUser = () => {

  const [name , setName] = useState<string | null>('Francisco');
  useEffect(() => {

  const getNameUser =  ()=> {
    const name = window.localStorage.getItem('@gavea-name-user');
    setName(name);
  }
  getNameUser();
  }, [])

  return (
    <S.Wrapper>
      <S.Avatar  src="icons/avatar/avatar01.svg" alt="avatar user" onClick={() => api.loGout()} />
      <S.WrapperUserName>
  <S.Title>Olá, <S.UserName>{name}</S.UserName> </S.Title>
        <S.Company>Gavea Marketplace</S.Company>
      </S.WrapperUserName>
    </S.Wrapper>
  )
}

export default CardUser
