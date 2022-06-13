import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Codes from './pages/Codes';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/codes" element={<Codes />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
