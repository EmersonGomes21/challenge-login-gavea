import React from 'react'
import * as S from './styles'

const Input = ({
  type,
  placeholder,
  icon,
  iconShowPassword,
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


  return (
    <>
    <S.Input type={type} placeholder={placeholder} className={classInput}/>
    <S.IconType src={`/icons/${icon}.png`} alt="icon input" className={classIconType}/>

  { iconShowPassword && <S.IconType src={`/icons/showPassword.png`} alt="icon input" className={classIconPassword}/> }
    </>
  )
}

export default Input
