import styled from 'styled-components'

export const WrapperTitle = styled.div``

export const GreetingTitle = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 600;
color: #FF6900;
`
export const WelcomeTitle = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 30px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 50%;
justify-content: start;
margin-top: 30px;

@media(max-width: 380px){
  height: 70%;
}
`

