import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div class="main"  id='projects'>
        <div class="titl">
          <h1>Projects</h1>
        </div>
        <section className="projects-container">
            <div className="project-card">
              <h2>Webscrapper</h2>
              <p>Web scraping is used for various purposes across different fields due to its ability to extract large amounts of data from websites quickly and efficiently.</p>
              <div className="links">
                <a href="https://github.com/omwagh28/Final_Web_D">GitHub</a>
                <a href="https://demo.com">Demo</a>
              </div>
            </div>
            <div className="project-card">
              <h2>PortFolio</h2>
              <p>Creating a portfolio can showcase your skills, projects, and accomplishments effectively. Here’s a comprehensive guide to building a strong portfolio, whether it’s for job applications, freelance work, or personal branding:</p>
              <div className="links">
                <a href="https://github.com/omwagh28/Portfolio">GitHub</a>
                <a href="https://demo.com">Demo</a>
              </div>
            </div>
            <div className="project-card">
              <h2>VehicleManagement</h2>
              <p>A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.</p>
              <div className="links">
                <a href="https://github.com/omwagh28/Backend_Dev">GitHub</a>
                <a href="https://demo.com">Demo</a>
              </div>
            </div>
          </section>
    </div>
    
  );
};

export default Projects;
