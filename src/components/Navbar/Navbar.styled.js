import styled, { css } from "styled-components";

// Reusable mixins for better maintainability
const hoverTransition = css`
  transition: all 0.3s ease;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
`;

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
  ${flexCenter}
  justify-content: space-between;
  margin-bottom: ${({ mb }) => mb || "0"};
`;

/* Brand */
export const Brand = styled.div`
  ${flexCenter}
  gap: 0.625rem;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  ${hoverTransition}

  &:hover {
    transform: scale(1.05);
  }
`;

const headingStyles = css`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  cursor: pointer;
  ${hoverTransition}

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Heading = styled.h1`
  ${headingStyles}

  @media ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const Heading2 = styled.h2`
  ${headingStyles}
  display: none;

  @media ${({ theme }) => theme.media.md} {
    display: block;
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
  padding: 0.25rem;

  @media ${({ theme }) => theme.media.lg} {
    display: block;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

/* Desktop Nav */
export const NavlistDesktop = styled.ul`
  ${flexCenter}
  gap: 0.75rem;
  margin-left: auto;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text.light};
      font-weight: ${({ theme }) => theme.typography.heading.weight.medium};
      ${hoverTransition}
      padding: 0 0.625rem;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        text-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}66;
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
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
    justify-content: space-between;
    align-items: start;
    position: fixed;
    top: 0;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.main};
    backdrop-filter: blur(10px);
    transition: left 0.4s ease;
    z-index: 999;
    padding: 20px;
    gap: 0.625rem;
    overflow-y: auto;

    li {
      width: 100%;
      list-style: none;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text.light};
        font-size: ${({ theme }) => theme.typography.heading.size.h6};
        ${hoverTransition}
        ${flexCenter}
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

        &:focus-visible {
          outline: 2px solid ${({ theme }) => theme.colors.primary};
          outline-offset: 2px;
        }
      }
    }
  }
`;

export const MobileControls = styled.div`
  ${flexCenter}
  gap: 1rem;

  @media ${({theme}) => theme.media.sm} {
    gap: 0;
  }
`;

export const MobileHeader = styled.div`
  ${flexCenter}
  gap: 0.625rem;
  margin-bottom: 2rem;
`;

export const NavlistFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.text.main};
  margin-top: 50px;
  padding: 10px;

  p {
    font-size: ${({ theme }) => theme.typography.body.footerText};
  }
`;
