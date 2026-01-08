import { memo } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCards from "../../components/Cards/ProjectCards/ProjectCards";
import * as S from "./Projects.styled";
import { projectSection } from "../../data/projects";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../../animations/animation";

const Projects = memo(({ id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <S.ProjectWrapper
      id={id}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Section Title */}
      <S.MotionBlock variants={fadeUp}>
        <SectionTitle
          title={projectSection.title}
          subtitle={projectSection.subtitle}
        />
      </S.MotionBlock>

      {/* Project Cards */}
      <S.MotionBlock variants={fadeUp}>
        <ProjectCards />
      </S.MotionBlock>
    </S.ProjectWrapper>
  );
});

export default Projects;
