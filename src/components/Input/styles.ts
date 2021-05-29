import styled, {css} from 'styled-components'

export const WrapperInput = styled.div`
position: relative;
`

export const Input = styled.input`
width: 100%;
height: 55px;
background: #FFFFFF;
border: 1px solid #D2E3EF;
box-sizing: border-box;
border-radius: 4px;
outline: none;
padding: 20px 10px 18px 54px;
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 107.6%;
color: #B1BEC2;
margin-bottom: 15px;

::placeholder,
  ::-webkit-input-placeholder {
    color: #B1BEC2;
  }
  :-ms-input-placeholder {
    color: #B1BEC2;
  }

 &.last {
   margin-bottom: 30px;
  }
`


export const IconType = styled.img`
font-size: 20px;
position: absolute;
left: 20px;
top: 20px;
`

export const IconTypePassword = styled.img`
font-size: 16px;
position: absolute;
right: 20px;
top: 21px;
`



