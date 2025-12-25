import { memo } from "react";
import { Link } from "react-scroll";
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
        <S.BadgeWrapper>
          <Link to="projects" smooth={true} duration={1000} spy={true}>
            <S.Badge>
              <p>
                20+ <br /> Projects
              </p>
            </S.Badge>
          </Link>

          <Link to="skills" smooth={true} duration={1000} spy={true}>
            <S.Badge $top="310px" $right="160px">
              <p>
                30+ <br />
                Skills
              </p>
            </S.Badge>
          </Link>

          <S.Profile
            src={aboutContent.profile}
            alt="Orlando Profile"
            loading="lazy"
          />
        </S.BadgeWrapper>

        <S.InfoContainer>
          <S.Intro>{aboutContent.intro}</S.Intro>
          <S.Name>{aboutContent.name}</S.Name>
          <S.Description>{aboutContent.description}</S.Description>
          <S.ButtonContainer>
            <Download />
          </S.ButtonContainer>
        </S.InfoContainer>
      </S.AboutContainer>
    </S.AboutWrapper>
  );
});

export default About;
