import React from 'react'
import * as S from './styles'


interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string
  width?: string;
  fontSize?: string;
  id?: string;
}
const Button : React.FC<Props> = ({ children, onClick, id ,  fontSize }) => <S.Button type="button" onClick={onClick} id={id} > <S.ButtonTitle fontSize={fontSize}>{children}</S.ButtonTitle> </S.Button>

export default Button
