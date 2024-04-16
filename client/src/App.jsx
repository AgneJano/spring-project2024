import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './home-page/HomePage';
import Footer from './components/Footer';
import ProjectPage from './project-page/ProjectPage';
import { Dashboard } from './dashboard/Dashboard';


function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/project' element={<ProjectPage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
