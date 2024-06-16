import React from 'react';
import './Home.css';
import Typing from './Typing';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="text-content">
          <h1>Hi There!</h1>
          <h1 className="name">I'M OM WAGHCHAVARE</h1>
          <h2 className="description">
            <Typing
              text={[
                "Software Developer"
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              duration={1000}
            />
          </h2>
        </div>
        <img src={logo} alt="Home Logo" className="home-logo" />
      </div>
    </div>
  );
};

export default Home;
