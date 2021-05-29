import React from 'react';

import '../styles/Navbar.css';
import NavItems from './NavItems';
import HamburgerMenu from './HamburgerMenu';

const Navbar = (props) => {
  const handleBurgerClick = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-ul');
    const navItems = document.querySelectorAll('.nav-items');

    navList.classList.toggle('nav-active');
    burgerMenu.classList.toggle('toggle');

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
          <h2>Victor Zottmann</h2>
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
          {/* <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}
        </ul>
        <HamburgerMenu className="burger-menu" onClick={handleBurgerClick} />
      </nav>
    </>
  );
};

export default Navbar;
