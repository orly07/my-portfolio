import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ProjectCards.styled";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
import { projects } from "../../../data/projects";
import { fadeUp } from "../../../animations/animation";

const MAX_VISIBLE = 4;

const ProjectCards = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, MAX_VISIBLE);

  return (
    <>
      <S.ProjectCardsWrapper>
        {visibleProjects.map((project) => (
          <S.Card
            key={project.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            layout
          >
            <S.Thumbnail
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <S.CardContent>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </S.CardContent>

            <S.CardButtonWrapper>
              <S.LiveDemo
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FaExternalLinkAlt />
              </S.LiveDemo>

              <S.Details onClick={() => navigate(`projects/${project.id}`)}>
                Details <FaLongArrowAltRight />
              </S.Details>
            </S.CardButtonWrapper>
          </S.Card>
        ))}
      </S.ProjectCardsWrapper>

      {projects.length > MAX_VISIBLE && (
        <S.ToggleWrapper>
          <S.ToggleButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "See less" : "See more"}
          </S.ToggleButton>
        </S.ToggleWrapper>
      )}
    </>
  );
};

export default ProjectCards;
