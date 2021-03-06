import React from 'react';

const HamburgerMenu = (props) => {
  return (
    <>
      <div className={props.className} onClick={props.onClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
