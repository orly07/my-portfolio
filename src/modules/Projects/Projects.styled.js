import styled from "styled-components";

export const ProjectWrapper = styled.section`
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
