import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './home-page/HomePage';
import Footer from './components/Footer';
import ProjectPage from './project-page/ProjectPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/project' element={<ProjectPage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
