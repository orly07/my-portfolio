import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.dark};

  @media ${({ theme }) => theme.media.md} {
    padding: 2rem;
  }
`;

export const MotionBlock = styled(motion.div)``;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding-top: 2rem;
  overflow: hidden;

  @media ${({ theme }) => theme.media.sm} {
    max-height: ${({ $expanded }) => ($expanded ? "1000px" : "310px")};
    transition: max-height 0.4s ease;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

export const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background.alt};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.15);
  }

  @media ${({ theme }) => theme.media.md} {
    font-size: 2rem;
  }
`;

export const SkillName = styled.h3`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const ToggleButton = styled(motion.button)`
  display: none;
  margin: 0.75rem auto;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;

  @media ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;
