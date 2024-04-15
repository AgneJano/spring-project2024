import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './loginForm/LoginForm';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<LoginForm/>} />
     </Routes>
    </>
  )
}

export default App
