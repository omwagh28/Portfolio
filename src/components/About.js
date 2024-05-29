import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <h1>Get to know me!</h1>
      <p>
        Hi, my name is <span className="highlight">Devansh Sahni</span> and I am from New Delhi, India. I'm a <span className="highlight">MERN stack web developer</span> and a final year college student pursuing BTech in CSE.
      </p>
      <p>
        I have done an internship as a <span className="highlight">software developer</span> at GoalFi which is a fintech startup. I love to create original projects with beautiful designs, you can check out some of my work in the projects section.
      </p>
      <p>
        I am <span className="highlight">open</span> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer. Apart from coding I love to do photography, you can check out some of my shots here <a href="https://instagram.com" className="highlight">Instagram</a>.
      </p>
    </section>
  );
};

export default About;
