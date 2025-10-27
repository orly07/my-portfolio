import styled from "styled-components";
import LandingPage from "./pages/LandingPage";

const Section = styled.section`
  height: 100vh;
  margin: ${({ m }) => m || "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.heading.size.h1};
  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.background.dark};
  transition: all 0.3s ease;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }
`;

function App() {
  return (
    <>
      <LandingPage />
      <Section id="skills">Skills</Section>
      <Section id="projects">Projects</Section>
      <Section id="resume">Resume</Section>
      <Section id="contact">Contact</Section>
    </>
  );
}

export default App;
