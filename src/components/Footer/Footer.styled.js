import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled(motion.footer)`
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 60px 20px;
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

export const Brand = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.heading.size.h3};
  font-family: ${({ theme }) => theme.textVariants.primary.fontFamily};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Links = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLink = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 16px;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Socials = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 20px;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const Copyright = styled(motion.p)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
`;
