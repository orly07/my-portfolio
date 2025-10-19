import styled, { css } from "styled-components";

/* Navbar Wrapper */
export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.main};
  padding: 6vh 7vw 3vh;
  transition: all 0.4s ease;

  @media ${({ theme }) => theme.media.xl} {
    padding: 6vh 2vw 3vh;
  }

  ${({ $isScrolled, theme }) =>
    $isScrolled &&
    css`
      padding: 20px 40px;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      box-shadow: 0 0 8px ${theme.colors.primary}66,
        0 4px 25px ${theme.colors.accent}55,
        0 6px 40px ${theme.colors.secondary}33;
    `}
`;

/* Layout Container */
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({mb}) => mb || "0"};
`;

/* Brand */
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
  @media ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Menu Icon */
export const MenuIcon = styled.button`
  background: transparent;
  border: none;
  display: none;
  color: ${({ theme }) => theme.colors.text.light};
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-left: 1.25rem;
  z-index: 1000;

  @media ${({ theme }) => theme.media.lg} {
    display: block;
  }
`;

/* Desktop Nav */
export const NavlistDesktop = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  li {
    list-style: none;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text.light};
      font-weight: ${({ theme }) => theme.typography.heading.weight.medium};
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        text-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}66;
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
      }
    }
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

/* Mobile Overlay */
export const MobileOverlay = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.lg} {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 990;
    transition: opacity 0.3s ease;
  }
`;

/* Mobile Nav */
export const NavlistMobile = styled.ul`
  display: none;

  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    position: fixed;
    top: 0;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.main};
    backdrop-filter: blur(10px);
    transition: left 0.4s ease;
    z-index: 999;
    padding: 20px;
    gap: 0.625rem;

    li {
      width: 100%;
      list-style: none;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text.light};
        font-size: ${({ theme }) => theme.typography.heading.size.h6};
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        padding: 0.75rem 0.75rem 0.75rem 3rem;
        border-radius: 0.625rem;

        &:hover {
          color: ${({ theme }) => theme.colors.text.main};
          background-color: ${({ theme }) => theme.colors.accent};
        }

        &.active {
          color: ${({ theme }) => theme.colors.accentDark};
          font-weight: ${({ theme }) =>
            theme.typography.heading.weight.semiBold};
          background-color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
`;

export const MobileControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 2rem;
`;


export const NavlistFooter = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors.text.main};
  margin-top: 50px;
  padding: 10px;
  
  p {
    font-size: ${({theme}) => theme.typography.body.footerText};
  }
`
