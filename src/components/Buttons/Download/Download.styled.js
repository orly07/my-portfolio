import styled from "styled-components";

export const DownloadStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.text.main};
  cursor: pointer;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  text-decoration: none;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryLight} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  background-size: 300px;
  background-position: right;
  transition: background-position 0.3s ease-in-out;

  &:hover {
    background-position: left;
  }

  svg {
    font-size: 20px;
  }
`;
