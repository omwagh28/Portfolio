import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-container">
      <h1>Projects</h1>
      <div className="project-card">
        <h2>Wiggles</h2>
        <p>An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.</p>
        <div className="links">
          <a href="https://github.com">GitHub</a>
          <a href="https://demo.com">Demo</a>
        </div>
      </div>
      <div className="project-card">
        <h2>Newsletter</h2>
        <p>A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.</p>
        <div className="links">
          <a href="https://github.com">GitHub</a>
          <a href="https://demo.com">Demo</a>
        </div>
      </div>
      <div className="project-card">
        <h2>RogFree</h2>
        <p>A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.</p>
        <div className="links">
          <a href="https://github.com">GitHub</a>
          <a href="https://demo.com">Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
