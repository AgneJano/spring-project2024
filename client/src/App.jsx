import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./home-page/HomePage";
import Footer from "./components/Footer";
import ProjectPage from "./project-page/ProjectPage";
import { Dashboard } from "./dashboard/Dasboard";
import RegistrationPage from "./registration-page/RegistrationPage";
import { AuthContext } from "./utils/AuthContext";
import { Projects } from "./projects/Projects";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated;
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/projects/:id" element={<ProjectPage />} /> */}
            <Route path="/project" element={<ProjectPage status='in-progress' name='Projektas' description='Projekto aprasymas'/>} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
