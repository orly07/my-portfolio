import styled from "styled-components";
export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
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

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${({ theme }) => theme.media.md} {
    flex-direction: column;
  }
`;

export const BadgeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  padding: 50px;

  @media ${({ theme }) => theme.media.sm} {
    padding: 0;
    min-width: 100%;
    height: auto;
  }
`;

export const Badge = styled.div`
  position: absolute;
  height: 80px;
  width: 100px;
  top: ${({ $top }) => ($top ? $top : "140px")};
  right: ${({ $right }) => ($right ? $right : "10px")};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

export const Profile = styled.img`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  max-width: 300px;

  @media ${({ theme }) => theme.media.md} {
    max-width: 300px;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
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

  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.typography.heading.size.h4};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 1rem;

  @media ${({ theme }) => theme.media.md} {
    margin-top: 2rem;
    justify-content: center;
  }
`;
