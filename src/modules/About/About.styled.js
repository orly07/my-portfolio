import styled from "styled-components";

export const AboutWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.background.dark};

  @media ${({ theme }) => theme.media.md} {
    padding: 4rem 2rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.size.h1};
  line-height: 1.2;
  overflow-y: hidden;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryDark} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.primaryLight} 100%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h2};
  }
`;

export const SubTitle = styled.h2`
  font-weight: ${({ theme }) => theme.typography.heading.weight.regular};

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h6};
  }

  text-align: center;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${({ theme }) => theme.media.md} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

export const Profile = styled.img`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  max-width: 300px;

  @media ${({ theme }) => theme.media.md} {
    max-width: 150px;
  }
`;

export const InfoContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media ${({ theme }) => theme.media.md} {
    min-width: 100%;
  }
`;

export const Intro = styled.h3`
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

export const Name = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.size.h3};
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media ${({ theme }) => theme.media.md} {
    margin-top: 2rem;
    justify-content: center;
  }
`;
