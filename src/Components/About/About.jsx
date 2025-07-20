import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaFigma,
  FaJsSquare,
} from "react-icons/fa";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="About Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a front-end developer with 4+ years of experience, focused on
              building clean, responsive, and engaging user interfaces. I
              specialize in React but adapt quickly to new technologies,
              delivering scalable and performant solutions for real-world
              problems.
            </p>
          </div>
          <div className="about-skills-grid">
            <div className="skill-card">
              <FaHtml5 style={{ color: "#E44D26" }} />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <FaCss3Alt style={{ color: "#1572B6" }} />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <FaJsSquare style={{ color: "#F7DF1E" }} />
              <p>JS ES6</p>
            </div>
            <div className="skill-card">
              <FaReact style={{ color: "#61DBFB" }} />
              <p>React</p>
            </div>
            <div className="skill-card">
              <FaAngular style={{ color: "#DD0031" }} />
              <p>Angular</p>
            </div>
            <div className="skill-card">
              <FaFigma style={{ color: "#A259FF" }} />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Years Of Experience</p>
        </div>

        <div className="achievement-divider"></div>

        <div className="about-achievement">
          <h1>80+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="achievement-divider"></div>

        <div className="about-achievement">
          <h1>35+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
