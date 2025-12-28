import { memo } from "react";
import * as S from "./Projects.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { projectsContent } from "../../data/data";

const Projects = memo(({ id }) => {
  return (
    <S.ProjectsWrapper id={id}>
      <SectionTitle
        title={projectsContent.title}
        subtitle={projectsContent.subtitle}
      />
    </S.ProjectsWrapper>
  );
});

export default Projects;
