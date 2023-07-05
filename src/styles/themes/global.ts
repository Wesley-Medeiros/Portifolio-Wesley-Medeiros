import { lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.white};

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blue};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.backgroundDark)};
    }
  }

  body {
    border: 0;
    background-color: ${({ theme }) => theme.backgroundDark};
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1px;
  }

`