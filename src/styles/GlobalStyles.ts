import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, border-style, #root{
    height: 100%;
    background-color: #ECEFFF;
  }
  *, button, input{
    border: 0;
    outline: none;
    font-family: 'Roboto', sans-serif
  }
  button{
    cursor: pointer;
  }

  @media only screen and (max-width: 730px){
    html{
      font-size: 90%
    }
  }
  @media only screen and (max-width: 460px){
    html{
      font-size: 85%
    }
  }
  @media only screen and (max-width: 280px){
    html{
      font-size: 75%
    }
  }

`
