import React from 'react';
import './Navbar.css';

const Navbar = ({ setSection }) => {
  return (
    <nav className="navbar">
      <div className="logo">DS</div>
      <ul className="nav-links">
        <li><button onClick={() => setSection('home')}>Home</button></li>
        <li><button onClick={() => setSection('about')}>About</button></li>
        <li><button onClick={() => setSection('projects')}>Projects</button></li>
        <li><button onClick={() => setSection('resume')}>Resume</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
