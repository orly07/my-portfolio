import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProjectPage from "../pages/ProjectPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
