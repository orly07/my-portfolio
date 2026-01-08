// src/pages/LandingPage.jsx
import { lazy, Suspense } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";

const About = lazy(() => import("../../modules/About"));
const Skills = lazy(() => import("../../modules/Skills"));
const Projects = lazy(() => import("../../modules/Projects"));
const Contacts = lazy(() => import("../../modules/Contact"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <Suspense fallback={<div>Loading...</div>}>
          <About id="about" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Skills id="skills" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Projects id="projects" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Contacts />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default LandingPage;
