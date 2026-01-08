import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 60px 20px;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

export const Brand = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.size.h3};
  font-family: ${({ theme }) => theme.textVariants.primary.fontFamily};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Links = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLink = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 20px;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
`;
