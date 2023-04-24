import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing:antialiased;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: white;
  }

  body {
    border: 0;
    background-color: #121212;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1px;
  }

`