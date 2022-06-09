import React, { useEffect, useState } from 'react';

import Mobile from './NavBar.mobile';
import Desktop from './NavBar.desktop';
import { Header } from '..';

const NavBar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return windowWidth < 768 ? (
    <>
      <Header />
      <Mobile />
    </>
  ) : (
    <Desktop />
  );
};

export default NavBar;
