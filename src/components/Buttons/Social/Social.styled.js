import styled from "styled-components";

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 20px;

  @media ${({theme}) => theme.media.sm} {
    margin-left: 0;
  }
`;

export const IconStyled = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.heading.size.h5};
  padding: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: white;
  }

  &:hover::before {
    transform: scale(1);
  }
`;
