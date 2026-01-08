// src/components/Cards/ProjectCards/ProjectCards.styled.js
import styled from "styled-components";

export const ProjectCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    padding: 0;
    padding-top: 1rem;
  }
`;

export const Cards = styled.div`
  border: 1px solid transparent;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #1646ccff;
    box-shadow: 0 1px 5px #2563eb;
  }

  @media ${({ theme }) => theme.media.md} {
    padding: 0.5rem;

    &:hover {
      box-shadow: none;
    }
  }

  h2 {
    padding: 1rem 0.625rem 0;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  p {
    padding: 0 0.625rem;
    color: ${({ theme }) => theme.colors.gray[300]};
    line-height: 1.625rem;
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  height: auto;
  width: 100%;
  max-width: 100%;
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;

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
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background-color: none;
  border: none;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
