import React from 'react'
import * as S from './styles'

interface Props {
  part: string
  pag: string
  ton: number
  value: number
  key?: number

}
const CardCommodities: React.FC<Props> = ({ pag, part, ton, value }) => (
  <S.Wrapper></S.Wrapper>
)

export default CardCommodities
