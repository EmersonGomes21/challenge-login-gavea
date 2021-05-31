import styled, {css} from 'styled-components'

export const WrapperTitle = styled.div``

export const GreetingTitle = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;
color: #FF6900;
`
export const WelcomeTitle = styled.h1`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 55%;
justify-content: start;
margin-top: 30px;
`



export const Alert = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 20px;
text-align: center;
font-size: 14px;
margin-top: 3rem;

`


export const Cssdefault = css`
align-items: center;
line-height: 25px;
margin: 0 auto;
`

export const Span = styled.span`
display: flex;
flex-direction: column;
width: 100%;
height: 20px;
text-align: center;
font-size: 1.6rem;
font-weight: bold;
font-family: Inter, sans-serif;
padding: 2px 0;
transition: all linear 1s;

&.register-error{
 color: #FF6900;
 ${Cssdefault}
 transition: all linear 1s;
}

&.register-success{
  color: #27cf2f;
  ${Cssdefault}
  transition: all linear 1s;
}
&.hide{
    display: none;
    transition: all linear 1s;
}


`
