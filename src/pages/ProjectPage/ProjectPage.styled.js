import styled from "styled-components";
import { Button, Breadcrumb } from "antd";

export const PageWrapper = styled.section`
  padding: 4rem 1.5rem;
`;

export const ProjectBreadcrumb = styled(Breadcrumb)`
  ol {
    align-items: center;
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }

  li {
    color: white !important;
  }

  li:last-child {
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.heading.size.h6};
  }

  .ant-breadcrumb-separator {
    color: white !important;
  }
`;

export const BackButton = styled(Button)`
  background-color: transparent !important;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.media.md} {
    align-items: center;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.size.h1};
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    background-color: transparent;
    border: 1px solid white;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: default;
      color: ${({ theme }) => theme.colors.primaryLight};
      border-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export const StatsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${({ theme }) => theme.media.md} {
    padding: 1rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.media.lg} {
    padding: 1rem;
    width: 100%;
  }
`;

export const StatItem = styled.div`
  flex: 1 1 140px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background.deep};
  padding: 0.625rem;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media ${({ theme }) => theme.media.md} {
    padding: 5px;

    &:hover {
      transform: scale(1);
    }
  }

  @media ${({ theme }) => theme.media.lg} {
    padding: 5px;
  }
`;
export const StatIcon = styled.span`
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.background.alt};
  padding: 0.6rem 1rem;
  border-radius: 50%;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }
`;

export const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
  }
`;

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  opacity: 0.8;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.body.small};
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.body.small};
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: 1.6;
`;

export const ProjectMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 0.625rem;
  transition: border 0.2s ease;
  overflow: hidden;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectImage = styled.img`
  display: block;
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 0.625rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  transition: border 0.2s ease, background-color 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const FeatureSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 0.5rem;
  padding: 2rem;
  transition: border 0.2s ease;

  ul {
    padding-left: 1.5rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    cursor: default;
    padding: 1rem 2rem;
    margin: 0.5rem 0;
    transition: border 0.2s ease;

    svg {
      font-size: ${({ theme }) => theme.typography.body.small};
      color: ${({ theme }) => theme.colors.primaryLight};
      margin-right: 0.5rem;
      margin-top: 0.375rem;
    }

    @media ${({ theme }) => theme.media.md} {
      padding: 1rem;
    }

    &:hover {
      border: 1px solid white;
      border-radius: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  }

  &:hover span[data-icon="star"] svg {
    transform: rotate(0deg);
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span[data-icon="star"] svg {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
    color: rgb(250 204 21);
    margin-top: 3px;
    transform: rotate(15deg);
    transition: transform 0.25s ease;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }
`;
