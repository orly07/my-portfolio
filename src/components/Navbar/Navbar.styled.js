import styled, { css } from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 6vh 8vw 3vh;
  transition: all 0.4s ease;

  ${({ isScrolled, theme }) =>
    isScrolled &&
    css`
      background: rgba(0, 0, 0, 0.9);
      padding: 3vh 8vw;
      backdrop-filter: blur(10px);

      /* ✨ Subtle glowing shadow beneath navbar */
      box-shadow: 
        0 0 8px ${theme.colors.primary}66,
        0 4px 25px ${theme.colors.accent}55,
        0 6px 40px ${theme.colors.secondary}33;
    `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    list-style: none;
    margin: 0 1rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.typography.heading.weights.medium};
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        text-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}66;
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.typography.heading.weights.bold};
      }
    }
  }
`;
