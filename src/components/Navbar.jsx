import React from 'react';

import NavItems from './NavItems';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Navbar.css';

const Navbar = (props) => {
  const handleBurgerClick = () => {
    const navList = document.querySelector('.nav-ul');
    const navItems = document.querySelectorAll('.nav-items');

    if (!navList.classList.contains('nav-active')) {
      navList.classList.add('nav-active');
    } else {
      navList.classList.remove('nav-active');
    }

    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ``;
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h4>Victor Zottmann</h4>
        </div>
        <ul className={props.className}>
          <NavItems
            path="/"
            liClass="nav-items"
            anchorClass="nav-links"
            text="Home"
          />
          <NavItems
            path="/about"
            liClass="nav-items"
            anchorClass="nav-links"
            text="About"
          />
          <NavItems
            path="/projects"
            liClass="nav-items"
            anchorClass="nav-links"
            text="Projects"
          />
          <NavItems
            path="/contact"
            liClass="nav-items"
            anchorClass="nav-links"
            text="Contact"
          />
        </ul>
        <HamburgerMenu onClick={handleBurgerClick} />
      </nav>
    </>
  );
};

export default Navbar;
