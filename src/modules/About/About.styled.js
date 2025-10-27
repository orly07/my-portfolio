import styled from "styled-components";

export const AboutWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

export const HeaderContainer = styled.div`
  display: flex;
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
`;

export const SubTitle = styled.h2`
  font-weight: ${({ theme }) => theme.typography.heading.weight.regular};
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

export const Profile = styled.img`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  max-width: 300px;
`;

export const InfoContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
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
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
