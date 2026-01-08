import { memo } from "react";
import { Link } from "react-scroll";
import * as S from "./About.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { aboutContent, skillsContent } from "../../data/data";
import { projects } from "../../data/projects";
import Download from "../../components/Buttons/Download/Download";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
} from "../../animations/animation";

const About = memo(({ id }) => {
  const totalProjects = projects.length;
  const totalSkills = skillsContent.categories.reduce(
    (t, c) => t + c.skills.length,
    0
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <S.AboutWrapper
      id={id}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Section Title */}
      <S.MotionBlock variants={fadeUp}>
        <SectionTitle
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />
      </S.MotionBlock>

      <S.AboutContainer>
        {/* Badges + Profile */}
        <S.BadgeWrapper>
          <S.Badge
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <Link to="projects" smooth duration={800}>
              <p>
                {inView && <CountUp end={totalProjects} duration={2} />}
                <br /> Projects
              </p>
            </Link>
          </S.Badge>

          <S.Badge
            $top="310px"
            $right="160px"
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.35 }}
          >
            <Link to="skills" smooth duration={800}>
              <p>
                {inView && <CountUp end={totalSkills} duration={2} />}
                <br /> Skills
              </p>
            </Link>
          </S.Badge>

          <S.Profile
            src={aboutContent.profile}
            alt="Orlando Profile"
            loading="lazy"
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
          />
        </S.BadgeWrapper>

        {/* Info */}
        <S.InfoContainer>
          <S.Intro variants={fadeUp}>{aboutContent.intro}</S.Intro>
          <S.Name variants={fadeUp}>{aboutContent.name}</S.Name>
          <S.Description variants={fadeUp}>
            {aboutContent.description}
          </S.Description>

          <S.ButtonContainer variants={fadeUp}>
            <Download />
          </S.ButtonContainer>
        </S.InfoContainer>
      </S.AboutContainer>
    </S.AboutWrapper>
  );
});

export default About;
