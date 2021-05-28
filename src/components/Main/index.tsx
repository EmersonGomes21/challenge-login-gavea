import React from 'react'

import * as S from './styles'
interface Props {
  children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children  }) => <S.Main>{children}</S.Main>

export default Main
