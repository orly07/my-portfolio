import styled from "styled-components";

export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.main};

  @media ${({ theme }) => theme.media.md} {
    height: 100%;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8rem 3rem 0;
  min-width: 100%;
  gap: 1.5rem;

  @media ${({ theme }) => theme.media.xl} {
    padding: 8rem 3rem 0;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 8rem 3rem 0;
  }
  @media ${({ theme }) => theme.media.md} {
    flex-direction: column;
    text-align: center;
    padding: 120px 20px 0;
  }

  @media ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    text-align: center;
    padding: 100px 0 0;
    gap: 0;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 60%;

  @media ${({ theme }) => theme.media.md} {
    order: 2;
    max-width: 100%;
    padding: 0 1.25rem;
  }

  @media ${({ theme }) => theme.media.sm} {
    order: 2;
    max-width: 100%;
    padding: 0 1.25rem;
  }
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.size.h2};

  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.heading.size.h4};
  }

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h5};
  }

  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.typography.heading.size.h6};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.size.h1};
  font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
  line-height: 1.2;
  margin: 0 auto;
  overflow-y: hidden;
  margin-bottom: 1rem;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryDark} 0%,
    ${({ theme }) => theme.colors.primary} 25%,
    ${({ theme }) => theme.colors.primaryLight} 60%,
    ${({ theme }) => theme.colors.text.main} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.typography.heading.size.h2};
  }

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }

  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }
`;

export const Bio = styled.p`
  font-size: ${({ theme }) => theme.typography.heading.size.h6};
`;

export const ImageContainer = styled.div`
  max-width: 40%;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.media.md} {
    order: 1;
    min-width: 100%;
  }
`;

export const Profile = styled.img`
  max-width: 400px;
  border: 3px solid ${({ theme }) => theme.colors.accentDark};
  border-radius: 1.75rem;
  transition: border ease 0.2s, transform ease 0.5s;
  transform: rotate(5deg);

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(0);
  }

  @media ${({ theme }) => theme.media.xxl} {
    max-width: 350px;
  }

  @media ${({ theme }) => theme.media.xl} {
    max-width: 300px;
  }

  @media ${({ theme }) => theme.media.md} {
    max-width: 300px;
    transform: rotate(0);
  }
`;

export const ButtonContainer = styled.div`
  min-width: 100%;
  padding: 0 100px 20px;
  @media ${({ theme }) => theme.media.xl} {
    display: flex;
    justify-content: center;
  }

  @media ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;
  }
`;
