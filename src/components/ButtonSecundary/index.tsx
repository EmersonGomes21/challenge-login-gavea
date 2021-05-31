import React from 'react'
import * as S from './styles'


interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick(event: React.MouseEvent<HTMLElement>):void
  radius?: string
  width?: string;
  fontSize?: string;
}
const ButtonSecundary : React.FC<Props> = ({ children, onClick }) => <S.Button type="submit" onClick={onClick}> <S.ButtonTitle>{children}</S.ButtonTitle> </S.Button>

export default ButtonSecundary
