import React, { useEffect, useState } from 'react'
import api from 'utils/lib/api'
import * as S from './styles'
import IconSair from '../Icons/IconSair';
const CardUser = () => {
  const [expand, setExpand] = useState(false)
  const [name, setName] = useState<string | null>('Francisco')
  useEffect(() => {
    const getNameUser = () => {
      const name = window.localStorage.getItem('@gavea-name-user')
      setName(name)
    }
    getNameUser()
  }, [])

  return (
    <S.Wrapper expand={expand} onClick={() => setExpand(!expand)}>
      <S.Avatar >
        <S.AvatarName>{name ? `${name[0]}${name[1]}` : ''}</S.AvatarName>
      </S.Avatar>
      <S.WrapperUserName>
        <S.Title>
          Olá, <S.UserName>{name}</S.UserName>{' '}
        </S.Title>
        <S.Company>Gavea Marketplace</S.Company>
       {
         expand &&
         <S.Logout onClick={() => api.loGout()}>
         <IconSair  />
       </S.Logout>
       }
      </S.WrapperUserName>
    </S.Wrapper>
  )
}

export default CardUser
