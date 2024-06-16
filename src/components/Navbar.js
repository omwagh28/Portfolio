import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setSection }) => {
  return (
    <nav className="navbar" id='navbar'>
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
