import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  button:focus, button:hover{
    opacity: 0.9;
    border: 1px solid #ccc;
    transition: all ease-in 0.5s;
  }

  @media(max-width: 360px){
  button[type="button"]{
    max-height: 40px;
    font-size: 14px;
  }
  input[type="email"],  input[type="password"], input[type="text"] {
    max-height: 40px;
    font-size: 12px;
  }

  input[type="email"] ~ img.icon,  input[type="password"] ~ img.icon, input[type="text"] ~ img.icon {
   top: 12px;
   font-size: 10px;
   width: 13px;
   height: 15px;
  }






 }

`

export default GlobalStyles;
