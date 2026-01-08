import styled from "styled-components";
import { motion } from "framer-motion";

// Wrapper for the entire About section
export const AboutWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.dark};

  @media ${({ theme }) => theme.media.md} {
    padding: 2rem;
  }
`;

export const MotionBlock = styled(motion.div)``;

// Container for badges and info
export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.media.md} {
    flex-direction: column;
  }
`;

// Motion-enabled wrapper for badges & profile
export const BadgeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  padding: 50px;

  @media ${({ theme }) => theme.media.sm} {
    padding: 0;
    min-width: 100%;
    height: auto;
  }
`;

// Motion-enabled badge
export const Badge = styled(motion.div)`
  position: absolute;
  height: 80px;
  width: 100px;
  top: ${({ $top }) => ($top ? $top : "140px")};
  right: ${({ $right }) => ($right ? $right : "10px")};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

// Motion-enabled profile image
export const Profile = styled(motion.img)`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  max-width: 300px;

  @media ${({ theme }) => theme.media.md} {
    max-width: 300px;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

// Info container for intro, name, description, button
export const InfoContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow: hidden;

  @media ${({ theme }) => theme.media.md} {
    min-width: 100%;
    margin-top: 2rem;
    align-items: center;
    text-align: center;
  }
`;

// Intro text with gradient effect
export const Intro = styled(motion.h3)`
  font-size: ${({ theme }) => theme.typography.heading.size.h3};
  line-height: 1;
  overflow-y: hidden;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryDark} 0%,
    ${({ theme }) => theme.colors.primary} 30%,
    ${({ theme }) => theme.colors.primaryLight} 100%
  );
  background-size: 150px;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Name heading
export const Name = styled(motion.h4)`
  font-size: ${({ theme }) => theme.typography.heading.size.h3};
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.typography.heading.size.h4};
  }
`;

// Description paragraph
export const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
`;

// Button container
export const ButtonContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 1rem;

  @media ${({ theme }) => theme.media.md} {
    margin-top: 2rem;
    justify-content: center;
  }
`;
