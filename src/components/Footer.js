import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../assets/hire-lambda-logo-white.svg';

const Footer = () => {
  return ( 
    <footer>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/contact">Contact Hire Lambda</NavLink>
      </nav>
      <div className="hl-logo">
        <NavLink exact to="/">
          <img src={logoWhite} alt="Logo" />
        </NavLink>
      </div>
      <div className="footer-icons">
        <div className="icons-container">
          <a
            href="https://twitter.com/lambdaschool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://www.facebook.com/LambdaSchoolOnline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square" />
          </a>
          <a
            href="https://github.com/LambdaSchool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;