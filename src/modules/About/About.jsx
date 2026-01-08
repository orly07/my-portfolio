// src/modules/About/About.jsx
import { memo } from "react";
import { Link } from "react-scroll";
import * as S from "./About.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { aboutContent } from "../../data/data";
import Download from "../../components/Buttons/Download/Download";
import { skillsContent } from "../../data/data";
import { projects } from "../../data/projects";

const About = memo(({ id }) => {
  const totalProjects = projects.length;

  const totalSkills = skillsContent.categories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  return (
    <S.AboutWrapper id={id}>
      <SectionTitle
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
      />
      <S.AboutContainer>
        <S.BadgeWrapper>
          <Link to="projects" smooth={true} duration={1000} spy={true}>
            <S.Badge>
              <p>
                {totalProjects} <br /> Projects
              </p>
            </S.Badge>
          </Link>

          <Link to="skills" smooth={true} duration={1000} spy={true}>
            <S.Badge $top="310px" $right="160px">
              <p>
                {totalSkills}
                <br />
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
