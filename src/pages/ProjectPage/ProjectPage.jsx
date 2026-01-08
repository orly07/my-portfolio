import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./ProjectPage.styled";
import {
  FaArrowLeft,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaCircle,
  FaStar,
} from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { Col, Row } from "antd";
import { projects } from "../../data/projects";
import Footer from "../../components/Footer/Footer";

const ProjectDetailsPage = memo(() => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);
  if (!project) return <div>No project found.</div>;

  return (
    <>
      <S.PageWrapper>
        {/* Breadcrumb */}
        <S.ProjectBreadcrumb
          items={[
            {
              title: (
                <S.BackButton onClick={() => navigate(-1)}>
                  <FaArrowLeft />
                  Back
                </S.BackButton>
              ),
            },
            { title: "Projects" },
            { title: project.title },
          ]}
        />

        <Row gutter={[32, 24]}>
          {/* LEFT CONTENT */}
          <Col sm={24} md={12}>
            <S.ProjectInfoSection>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>

              <S.TechnologyList>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </S.TechnologyList>

              {/* STATS */}
              <S.StatsSection>
                <S.StatItem>
                  <S.StatIcon>
                    <FaCode />
                  </S.StatIcon>
                  <S.StatValue>{project.technologies.length}</S.StatValue>
                  <S.StatLabel>Technologies </S.StatLabel>
                </S.StatItem>

                <S.StatItem>
                  <S.StatIcon>
                    <IoLayers />
                  </S.StatIcon>
                  <S.StatValue>{project.features.length}</S.StatValue>
                  <S.StatLabel>Features</S.StatLabel>
                </S.StatItem>
              </S.StatsSection>

              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </S.ProjectInfoSection>
          </Col>

          {/* RIGHT CONTENT */}
          <Col sm={24} md={12}>
            <S.ProjectMediaSection>
              <S.ImageWrapper>
                <S.ProjectImage src={project.image} alt={project.title} />
              </S.ImageWrapper>

              <S.ProjectLinks>
                <S.ProjectLink
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </S.ProjectLink>

                <S.ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </S.ProjectLink>
              </S.ProjectLinks>

              <S.FeatureSection>
                <S.FeatureHeader>
                  <span data-icon="star" aria-hidden="true">
                    <FaStar />
                  </span>
                  <h3>Features</h3>
                </S.FeatureHeader>

                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <FaCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </S.FeatureSection>
            </S.ProjectMediaSection>
          </Col>
        </Row>
      </S.PageWrapper>
      <Footer />
    </>
  );
});

export default ProjectDetailsPage;
