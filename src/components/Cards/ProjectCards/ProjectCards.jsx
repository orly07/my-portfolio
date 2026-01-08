import { useNavigate } from "react-router-dom";
import * as S from "./ProjectCards.styled";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
import { projects } from "../../../data/projects";

const ProjectCards = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.ProjectCardsWrapper>
        {projects.map((project) => (
          <S.Cards key={project.id}>
            <S.Thumbnail src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <S.CardButtonWrapper>
              <S.LiveDemo href={project.liveDemo}>
                Live Demo <FaExternalLinkAlt />
              </S.LiveDemo>
              <S.Details onClick={() => navigate(`projects/${project.id}`)}>
                Details <FaLongArrowAltRight />
              </S.Details>
            </S.CardButtonWrapper>
          </S.Cards>
        ))}
      </S.ProjectCardsWrapper>
    </>
  );
};

export default ProjectCards;
