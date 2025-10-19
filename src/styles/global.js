import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: 
      ${({ theme }) =>
        `${theme.colors.scrollbar.primary} ${theme.colors.scrollbar.secondary}`};
  }

  body {
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};

    color: ${({ theme }) => theme.colors.text.light};
    background-color: ${({ theme }) => theme.colors.background.main};
    word-wrap: break-word;
    transition: background-color 0.3s ease, color 0.3s ease;
    scroll-behavior: smooth;

  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbar.secondary};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;
