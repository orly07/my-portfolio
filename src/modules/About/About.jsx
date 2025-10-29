import { memo } from "react";
import * as S from "./About.styled";
import { aboutContent } from "../../data/data";
import Download from "../../components/Buttons/Download/Download";

const About = memo(({ id }) => {
  return (
    <S.AboutWrapper id={id}>
      <S.HeaderContainer>
        <S.Title>{aboutContent.title}</S.Title>
        <S.SubTitle>{aboutContent.subtitle}</S.SubTitle>
      </S.HeaderContainer>

      <S.AboutContainer>
        <S.ImageContainer>
          <S.Profile
            src={aboutContent.profile}
            alt="Orlando Profile"
            loading="lazy"
          />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Intro>{aboutContent.intro}</S.Intro>
          <S.Name>{aboutContent.name}</S.Name>
          <p>{aboutContent.description}</p>
        </S.InfoContainer>
      </S.AboutContainer>
      <S.ButtonContainer>
        <Download />
      </S.ButtonContainer>
    </S.AboutWrapper>
  );
});

export default About;
