import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    -webkit-font-smooth: antialiased;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    background: none;
    border: 1px solid transparent;
    outline: 0;
    cursor: pointer;
  }

  input, textarea, select, button {
    background: none;
    border: 1px solid transparent;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export { Global };
