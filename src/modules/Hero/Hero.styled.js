import styled from "styled-components";

export const HeroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background.main};
`;

export const HeroContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 120px 100px 0 100px;
  min-width: 100%;
  gap: 20px;
`;

export const HeaderContainer = styled.div`
  max-width: 60%;
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.size.h2};
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
    ${({ theme }) => theme.colors.primary} 40%,
    ${({ theme }) => theme.colors.primaryLight} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Bio = styled.p`
  font-size: ${({ theme }) => theme.typography.heading.size.h6};
`;

export const ImageContainer = styled.div`
  max-width: 40%;
  padding: 20px;
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
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 100px;
`;
