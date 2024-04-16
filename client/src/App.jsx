import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./home-page/HomePage";
import Footer from "./components/Footer";
import ProjectPage from "./project-page/ProjectPage";
import { AuthProvider } from "./utils/AuthContext";
import { Dashboard } from "./dashboard/Dashboard";
import RegistrationPage from './registration-page/RegistrationPage';

function App() {
  return (
    <>
      {/* <AuthProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
        <Footer />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
