// Create your About component here
import React from 'react';
import IMG from '../assets/Detective.png';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">
          My name is Issa. I'm a second year cs student and i love coding and such. I alslo like
        </p>
        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;