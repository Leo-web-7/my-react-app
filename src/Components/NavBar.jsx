import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import '../App.css';

function NavBar() {
  return (
    <Router>
            <div>
                <nav>
                    <ul>
                      <div className="logo">
                        <h2>Portofolio</h2>
                      </div>
                      <div className="link">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                      </div>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </div>
    </Router>
  )
}

export default NavBar;
