import React from 'react'
import * as S from './styles'


interface Props {
  border?: string;
  color?: string;
  buttonText?: string;
  height?: string;
  onClick: () => void;
  radius?: string
  width?: string;
  fontSize?: string;
  id?: string;
}
const Button : React.FC<Props> = ({  buttonText  = 'Entrar', onClick, id ,  fontSize }) => <S.Button type="button" onClick={onClick} id={id} > <S.ButtonTitle fontSize={fontSize}>{buttonText}</S.ButtonTitle> </S.Button>

export default Button
