import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.typography.heading.weights.bold};
  font-size: ${({ theme }) => theme.typography.heading.sizes.h6};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-left: 1.3rem;
  box-shadow: 1px 1px 5px ${({theme}) => theme.colors.accent2};

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 70%,
    ${({theme}) => theme.colors.secondary} 90%,
    ${({ theme }) => theme.colors.accent2} 100%

  );
  background-size: 300% auto;
  background-position:  right;
  transition: background-position 0.3s ease-in-out;

  &:hover {
    background-position:  center;
  }
`;
