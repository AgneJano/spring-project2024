import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Dashboard } from './dashboard/Dashboard';

function App() {

  return (
    <>
     <Navbar />
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    </Routes>
    
     
    </>
  )
}

export default App
