// src/pages/LandingPage.jsx
import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../modules/Hero";

const About = lazy(() => import("../modules/About"));
const Skills = lazy(() => import("../modules/Skills"));

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
      </main>
    </>
  );
};

export default LandingPage;
