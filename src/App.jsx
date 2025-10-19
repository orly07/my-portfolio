import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    margin: ${({m}) => m || "0"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.typography.heading.sizes.h1};
`
function App() {
  return (  
    <>
      <Navbar />
      <Container id="home">Home</Container>
      <Container id="about">About</Container>
      <Container id="skills">Skills</Container>
      <Container id="projects">Projects</Container>
      <Container id="resume">Resume</Container>
      <Container id="contact">Contact</Container>
    </>
  );
}

export default App;
