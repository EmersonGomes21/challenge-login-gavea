import styled from 'styled-components'
interface PropsButtonTitle {
  fontSize?: string;
}


export const Button = styled.button`
width: 100%;
height: 100%;
max-height: 55px;
background-color: #FF6900 ;
font-size: 15px;
border: none;
border-radius: 4px;

@media(max-width: 360px){
max-height: 40px;
}
`

export const ButtonTitle = styled.span<PropsButtonTitle>`
color: #fff;
font-family: Inter;
font-weight: bold;
`



