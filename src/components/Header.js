import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">DS</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
