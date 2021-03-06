import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/hire-lambda-logo.svg';


const Header = () => {
  return ( 
    <header>
      <div className="top-bar">
        <div className="hl-logo">
          <NavLink exact to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <Link to="/login" className="btn-red">
          login <i className="fas fa-sign-out-alt" />
        </Link>
      </div>
    </header>
  );
}
 
export default Header;