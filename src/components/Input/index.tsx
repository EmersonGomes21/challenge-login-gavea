import React, {useState} from 'react'
import * as S from './styles'

const Input = ({
  type,
  placeholder,
  icon,
  classInput,
  classIconType,
  classIconPassword
}: {
  type: string
  placeholder: string
  icon: string
  iconShowPassword?: string
  classInput?: string
  classIconType?: string
  classIconPassword?: string
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
    <S.Input type = { type !== 'password' ? type : typeToggle  }  placeholder={placeholder} className={classInput}/>
    <S.IconType src={`/icons/${icon}.png`} alt="icon input" className={classIconType}/>

  { type == 'password' && <S.IconTypePassword onClick={() => showToggle()} src={`/icons/showPassword.png`} alt="icon input" className={classIconPassword}/> }
    </S.WrapperInput>
  )
}

export default Input
