import React from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h4>Victor Zottmann</h4>
        </div>
        <ul className="nav-ul">
          <li className="nav-items">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-nav-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
