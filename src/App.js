import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [section, setSection] = useState('home');

  return (
    <div className="app">
      <Navbar setSection={setSection} />
      {section === 'home' && <Home />}
      {section === 'about' && <About />}
      {section === 'projects' && <Projects />}
      {section === 'resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
