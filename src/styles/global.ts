import {createGlobalStyle} from 'styled-components';

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
    transition: all linear 0.5;
  }

input:-ms-input-placeholder, input::-webkit-input-placeholder, input::placeholder, input::-moz-placeholder, input::-moz-placeholder{
  color: #B1BEC2;
}

.styles__WrapperInput-sc-7g6ata-0:nth-child(2){
  margin-bottom: 30px !important;
}

`

export default GlobalStyles;
