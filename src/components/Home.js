import React from 'react';
import './Home.css';
import Typing from './Typing';

const Home = () => {
  return (
    <section className="home-container" id='home'>
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
    </section>
  );
};

export default Home;
