import React, {ChangeEvent, useState} from 'react'
import * as S from './styles'

const Input = ({
  type,
  placeholder,
  icon,
  classInput = '',
  classIconType = '',
  classIconPassword = '',
  ...rest
}: {
  type: string
  placeholder: string
  icon: string
  iconShowPassword?: string
  classInput?: string
  classIconType?: string
  classIconPassword?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
const [ togglePassword, setTogglePassword] = useState(false);
const [ typeToggle, setTypeToggle] = useState('password');

const showToggle = () =>{
  setTogglePassword(!togglePassword);
  if( !togglePassword ){
    setTypeToggle('text');
  }
  else{
    setTypeToggle('password');
  }
}
  return (
    <S.WrapperInput>
    <S.Input {...rest} type = { type !== 'password' ? type : typeToggle  }  placeholder={placeholder} className={`input ${classInput}`}/>
    <S.IconType src={`/icons/${icon}.svg`} alt="icon input" className={`icon ${classIconType}`}/>

  { type == 'password' && <S.IconTypePassword onClick={() => showToggle()} src={`/icons/showPassword.svg`} alt="icon input" className={`icon ${classIconPassword}`}/> }
    </S.WrapperInput>
  )
}

export default Input
