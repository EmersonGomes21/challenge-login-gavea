import styled from 'styled-components'

export const Wrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
border-radius: 7px;
width: 100%;
height: 100%;
max-height: 80px;
position: relative;
top: -6rem;
display: flex;
align-items: center;
justify-content: flex-start;

`
export const Avatar = styled.img`
width: 5rem;
height: 5rem;
border-radius: 50%;
margin-left: 1.6rem;
box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
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



