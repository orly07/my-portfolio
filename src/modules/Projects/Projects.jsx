import { memo } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCards from "../../components/Cards/ProjectCards/ProjectCards";
import * as S from "./Projects.styled";
import { projectSection } from "../../data/projects";

const Projects = memo(({ id }) => {
  return (
    <>
      <S.ProjectWrapper id={id}>
        <SectionTitle
          title={projectSection.title}
          subtitle={projectSection.subtitle}
        />

        <ProjectCards />
      </S.ProjectWrapper>
    </>
  );
});

export default Projects;
