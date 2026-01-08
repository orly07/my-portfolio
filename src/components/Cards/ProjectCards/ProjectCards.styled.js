import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  overflow: hidden;

  @media ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    padding: 0;
    padding-top: 1rem;
  }
`;

export const Card = styled(motion.article)`
  border: 1px solid transparent;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.light};
  cursor: pointer;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;

  &:hover {
    border-color: #1646ccff;
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.25);
  }

  @media ${({ theme }) => theme.media.md} {
    &:hover {
      box-shadow: none;
    }
  }
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 1rem 1.25rem 0;

  h2 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
    line-height: 1.625rem;
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem 1.25rem;

  @media ${({ theme }) => theme.media.md} {
    margin-top: 0.75rem;
  }
`;

export const LiveDemo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Details = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: transform 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
