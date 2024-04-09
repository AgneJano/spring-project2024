import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    </>
  )
}

export default App
