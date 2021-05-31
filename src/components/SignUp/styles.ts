import styled, {css} from 'styled-components'

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

&.register-error{
 color: #FF6900;
 ${Cssdefault}
}

&.register-success{
  color: #27cf2f;
  ${Cssdefault}
}
&.hide{
    display: none;
}


`






