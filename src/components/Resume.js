import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-container" id = 'resume'>
      <h1>Resume</h1>
      <a href="/resume.pdf" target='_blank'> <button>download resume</button></a>
    </section>
  );
};

export default Resume;
