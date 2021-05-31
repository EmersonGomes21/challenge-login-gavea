import styled from 'styled-components'

interface Props {
  expand: boolean;
}
export const Wrapper = styled.div<Props>`
background: #FFFFFF;
box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
border-radius: 7px;
width: 100%;
height: 100%;
max-height: ${(props) => props.expand == true ? 100 : 80}px;
position: relative;
top: -6rem;
display: flex;
align-items: center;
justify-content: flex-start;
transition: all  linear 0.4s ;

`
export const Avatar = styled.div`
display: flex;
align-items: center;
width: 5rem;
height: 5rem;
border-radius: 50%;
margin-left: 1.6rem;
background: #5998C5;
box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
text-align: center;
`
export const AvatarName = styled.span`
font-family: Karla;
font-style: normal;
font-weight: normal;
width: max-content;
height: auto;
color: #fff;
font-size: 22px;
line-height: 107.6%;
margin: auto;

`


export const WrapperUserName = styled.div`
width: max-content;
height: 50px;
margin-left: 1.4rem;
flex-direction: column;
justify-content: center;
align-items: center;
line-height:  30px;
`
export const Title = styled.h1`
font-family: Inter;
font-style: normal;
width: max-content;
font-weight: 600;
font-size: 20px;
line-height: 20px;
color: #092A34;
`
export const UserName = styled.span`
width: max-content;
`
export const Company = styled.span`
font-family: Inter;
font-style: normal;
font-weight: normal;
width: max-content;
color: #748C94;
opacity: 0.8;
font-size: 14px;
`
export const Logout = styled.div`
   width: 5px;
   height: 5px;
    right: 20px;
    z-index: 1;

    pointer-events: none;

`


