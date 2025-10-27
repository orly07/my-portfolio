import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../modules/Hero"

const About = lazy(() => import("../modules/About"));

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <Suspense fallback={<div>Loading...</div>}>
          <About id="about" />
        </Suspense>
      </main>
    </>
  );
};

export default LandingPage;
