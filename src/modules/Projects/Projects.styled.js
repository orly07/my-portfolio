import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.main};
  overflow: hidden;

  @media ${({ theme }) => theme.media.md} {
    padding: 2rem;
  }
`;

export const MotionBlock = styled(motion.div)`
  width: 100%;
`;
