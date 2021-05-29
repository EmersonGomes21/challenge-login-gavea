import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
  justify?: string
}
export const Wrapper = styled.main<Props>`
z-index: 4;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: ${ props => props.justify ?  props.justify : 'space-around' };
padding:  20px;
position: relative;
`
