import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.colors.scrollbarPrimary} ${theme.colors.scrollbarSecondary}`};
  }

    body {
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
    word-wrap: break-word;
  }

    ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbarPrimary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarSecondary};
  }
`;
