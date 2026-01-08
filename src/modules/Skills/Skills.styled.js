import styled from "styled-components";

export const SkillWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.dark};

  @media ${({ theme }) => theme.media.md} {
    padding: 2rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading.size.h2};
  font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 2rem;
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding-top: 2rem;
  transition: max-height 0.4s ease;
  overflow: hidden;

  max-height: none;

  @media ${({ theme }) => theme.media.sm} {
    max-height: ${({ $expanded }) => ($expanded ? "1000px" : "310px")};
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.alt};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

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

export const ToggleButton = styled.button`
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
