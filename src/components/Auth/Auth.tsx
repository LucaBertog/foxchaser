/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

import { Container, Modal } from './Auth.styles';
import Desktop from './Nav/Nav.desktop';
import Mobile from './Nav/Nav.mobile';

const Auth: React.FC<{ children: JSX.Element; isPageLogin: boolean }> = ({
  children,
  isPageLogin,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <Modal>
        {windowWidth < 1100 ? (
          <Mobile isPageLogin={isPageLogin} children={children} />
        ) : (
          <Desktop isPageLogin={isPageLogin} children={children} />
        )}
      </Modal>
    </Container>
  );
};

export default Auth;
