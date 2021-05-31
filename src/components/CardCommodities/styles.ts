import styled, {css} from 'styled-components'
interface PropsBorder{
  operation: string;
}
export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
margin-top: 8px;
height: 50px;
box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07), 0px 3.79717px 13.4018px rgba(45, 76, 113, 0.0417275), 0px 1.13052px 3.99006px rgba(45, 76, 113, 0.0282725);
border-radius: 4px;
border: 1px solid #D2E3EF;
position: relative;
animation-name: example;
animation-duration: 1s;

`



export const Border = styled.div<PropsBorder>`
height: 100%;
width: 5px;
background-color: ${props => props.operation == 'negativo' ? '#ED0000'  : '#06A75C' };
border-radius: 4px 0px 0px 4px;
position: absolute;
left: 0;
`
export const Avatar = styled.img`
`
const cssSpan = css`
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 107.6%;
text-align: left;
`;

export const Part = styled.span`
${cssSpan}
color: #47595F;
width: 74px;

`
export const Pag = styled.span`
${cssSpan}
color: #47595F;
width: 54px;
`
export const Ton = styled.span`
${cssSpan}
color: #47595F;

`

export const Value = styled.span<PropsBorder>`
${cssSpan}
color: ${props => props.operation == 'negativo' ? '#ED0000'  : '#06A75C' };
`

