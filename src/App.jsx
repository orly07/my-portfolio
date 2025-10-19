import styled from "styled-components";
import Navbar from "./components/Navbar";

const Section = styled.section`
  height: 100vh;
  margin: ${({ m }) => m || "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.heading.size.h1};
  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.background.main};
  transition: all 0.3s ease;

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.heading.size.h3};
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section id="home">Home</Section>
        <Section id="about">About</Section>
        <Section id="skills">Skills</Section>
        <Section id="projects">Projects</Section>
        <Section id="resume">Resume</Section>
        <Section id="contact">Contact</Section>
      </main>
    </>
  );
}

export default App;
