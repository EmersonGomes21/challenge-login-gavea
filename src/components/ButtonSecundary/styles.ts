import styled from 'styled-components'

export const Button = styled.button`
width: 100%;
height: 100%;
max-height: 55px;
background-color: transparent;
font-size: 15px;
border: 1px solid #FFFFFF;
box-sizing: border-box;
filter: drop-shadow(0px 6px 13px rgba(45, 56, 83, 0.16));
border-radius: 4px;
@media(max-width: 360px){
max-height: 40px;
}
`
export const ButtonTitle = styled.span`
color: #fff;
font-style: normal;
font-weight: bold;
`



