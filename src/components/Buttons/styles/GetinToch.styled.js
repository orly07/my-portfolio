import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  cursor: pointer;
  margin-left: auto;

  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading.size.h6};
  font-weight: ${({ theme }) => theme.typography.heading.weight.medium};
  color: ${({ theme }) => theme.colors.text.light};

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 70%,
    ${({ theme }) => theme.colors.secondary} 90%,
    ${({ theme }) => theme.colors.accentDark} 100%
  );
  background-size: 300% auto;
  background-position: right;

  box-shadow: 1px 1px 6px ${({ theme }) => theme.colors.accentDark};
  transition: background-position 0.3s ease-in-out, transform 0.3s ease;

  &:hover {
    background-position: center;
  }

  &:active {
    transform: scale(0.98);
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({theme}) => theme.typography.body.fontWeight};
    padding: 15px 40px;
  }

  @media ${({theme}) => theme.media.sm} {
    padding: 10px 20px;
  }
`;
