import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.heading.size.h6};
  letter-spacing: 2px;
  border-radius: 50px;
  transition: background-color ease 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};
    color: white;
  }

  @media ${({ theme }) => theme.media.sm} {
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }
`;
