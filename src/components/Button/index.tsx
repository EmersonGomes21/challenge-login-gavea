import React from 'react'
import * as S from './styles'


interface Props {
  border?: string;
  color?: string;
  buttonText?: string;
  height?: string;
  onClick(event: React.MouseEvent<HTMLElement>):void
  radius?: string;
  width?: string;
  fontSize?: string;
  id?: string;
}
const Button : React.FC<Props>  = ({  buttonText  = 'Entrar', id ,  fontSize, onClick }  )  => <S.Button type="submit"  onClick={onClick} id={id} > <S.ButtonTitle fontSize={fontSize}>{buttonText}</S.ButtonTitle> </S.Button>

export default Button
