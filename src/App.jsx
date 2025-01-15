import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Leaderboard from './components/Leaderboard'
import Skirk from './assets/Skirk.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  // let [mode, setMode] = useState('light');
return(
  <Router>
  <>
    <img src={Skirk} alt="Ruinguard" className="background-image" />
    <Navbar></Navbar>
    
    <div className="container my-3">
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Home/>} 
        />
        <Route 
          exact 
          path="/Leaderboard" 
          element={<Leaderboard/>} 
        />
        <Route 
          exact 
          path="/about" 
          element={<About  />} 
        />
      </Routes>
    </div>
  </>
</Router>

)

}

export default App
