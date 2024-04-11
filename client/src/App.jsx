import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './home-page/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<HomePage />}/>
     </Routes>
    </>
  )
}

export default App
