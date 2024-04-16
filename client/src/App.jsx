import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./home-page/HomePage";
import Footer from "./components/Footer";
import ProjectPage from "./project-page/ProjectPage";
import { Dashboard } from "./dashboard/Dashboard";
import RegistrationPage from "./registration-page/RegistrationPage";
import { AuthContext } from "./utils/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        {isAuthenticated ? (
          <Route path="/projects" element={<Dashboard />} />
        ) : (
          navigate("/")
        )}
        {isAuthenticated ? (
          <Route path="/project" element={<ProjectPage />} />
        ) : (
          navigate("/")
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
