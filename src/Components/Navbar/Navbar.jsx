import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="Navbar">
        <ul className="nav-menu">
          <li><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#services">Services</AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#work">Portfolio</AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
        </ul>

        <div className="nav-button-group">
          <AnchorLink className="nav-button" offset={50} href="#contact">Connect With Me</AnchorLink>
          <a className="nav-button" href="/Resume Abdelrhman Mohammed.pdf" download>Download Resume</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={closeMenu}>
          <FaTimes />
        </div>
        <ul className="sidebar-menu">
          <li onClick={closeMenu}><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
          <li onClick={closeMenu}><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li>
          <li onClick={closeMenu}><AnchorLink className="anchor-link" offset={50} href="#services">Services</AnchorLink></li>
          <li onClick={closeMenu}><AnchorLink className="anchor-link" offset={50} href="#work">Portfolio</AnchorLink></li>
          <li onClick={closeMenu}><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
          <div className="nav-button-group-vertical">
            <AnchorLink className="nav-button" offset={50} href="#contact">Connect With Me</AnchorLink>
            <a className="nav-button" href="./Resume Abdelrhman Mohammed.pdf" download>Download Resume</a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
