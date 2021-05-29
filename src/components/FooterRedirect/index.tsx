import React from 'react'
import Link from 'next/link'
import * as S from './styles'

interface Props {
href: string;
primaryText: string;
name: string;

}


const FooterRedirect : React.FC<Props> = ({
  name,
  href,
  primaryText

}) => (
  <S.Wrapper>
<S.Primarytext>{`${primaryText} tem uma conta?`}</S.Primarytext>
  <Link  href={href}>
  <S.a>{name}</S.a>
   </Link>
  </S.Wrapper>
)

export default FooterRedirect
