import React from 'react';

import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

const NavItems = (props) => {
  const { path, liClass, anchorClass, text } = props;
  return (
    <li className={liClass}>
      <Link to={path} className={anchorClass}>
        {text}
      </Link>
    </li>
  );
};

export default NavItems;
