import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.PNG';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile_img" src={profile_img} alt="Profile" />
      <h1><span>I'm Abdelrhman Mohammed</span></h1>
      <p>Egyptian front-end developer crafting clean, fast, and beautiful web experiences that just feel right.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" className="connect-link">Connect With Me</AnchorLink>
        </div>
        <a
          className="hero-resume"
          href={`${import.meta.env.BASE_URL}Resume_Abdelrhman_Mohammed.pdf`}
          download
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
