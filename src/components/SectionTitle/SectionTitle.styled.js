import styled from "styled-components";

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading.size.h2};
  font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h2};
  }
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 2rem;
  text-align: center;
`;
