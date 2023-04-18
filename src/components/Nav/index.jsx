import React from 'react';
import Logo from './Logo';
import LightDarkTheme from './LightDark';
import Navigation from './Navigation';

const Nav = () => {
  return (
    <div
      className="nav"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    > 
      <Logo />
      <Navigation />
      <LightDarkTheme />
    </div>
  );
};

export default Nav;
