import styled, {css} from 'styled-components'
export const cssDefualt = css`
font-family: Karla;
font-style: normal;
font-size: 15px;
line-height: 107.6%;
`;
export const Wrapper = styled.section`
position: relative;
bottom: 0;
display: flex;
width: max-content;
text-align: center;
margin: 0 auto;
margin-top: -7vh;
${cssDefualt}
z-index: 9999;

/*Ajuste de responsividade em dispositivos com altura maior de tela */
@media(min-height: 750px) and (max-width: 450px){
  margin-top: -12vh;
}
`
export const Primarytext = styled.span`
color: #748C94;
`
export const a = styled.a`
color: #FF6900;
font-weight: bold;
margin-left: 4px;

`



