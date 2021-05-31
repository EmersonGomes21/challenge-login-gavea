
import React from 'react'

import * as S from './styles'
interface Props {
  children: React.ReactNode
  id?: string
  className?: string
  justify?: string
}

const Main: React.FC<Props> = ({ children, id, className, justify }) => (


  <S.Wrapper className={className} id={id} justify={justify} >
    {children}
  </S.Wrapper>

)

export default Main
