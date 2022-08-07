import React from 'react';
import { NavBar as NavBarComponent } from '../../components';
import { Container, Wrapper } from './NavBar.styles';

// eslint-disable-next-line no-undef
const NavBar: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <NavBarComponent />
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  </>
);

export default NavBar;
