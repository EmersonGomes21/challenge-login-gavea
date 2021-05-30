import React from 'react'
import * as S from './styles'

interface Props {
  part: string
  pag: string
  ton: string
  value: string
  operation: string
  iconUrl: string
}
const CardCommodities: React.FC<Props> = ({
  pag,
  part,
  ton,
  value,
  operation = 'positivo',
  iconUrl
}) => (
  <S.Wrapper>
    <S.Border operation={operation}></S.Border>
    <S.Avatar src={`/icons/avatar/${iconUrl}`} alt={`avatar ${part}`} />
    <S.Part>{part}</S.Part>
    <S.Pag>{pag}</S.Pag>
    <S.Ton>{ton}</S.Ton>
    <S.Value operation={operation}>{value}</S.Value>
  </S.Wrapper>
)

export default CardCommodities
