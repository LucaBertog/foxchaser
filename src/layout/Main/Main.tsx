import React from 'react';
import { NavBar, NewPost, Sidebar } from '../../components';
import { Container, Wrapper } from './Main.styles';

// eslint-disable-next-line no-undef
const Main: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <NavBar />
    <Container>
      <Wrapper>
        {children}
        <Sidebar />
      </Wrapper>
    </Container>
    <NewPost />
  </>
);

export default Main;
