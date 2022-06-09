import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { NavBar } from '../components';
import { Home, Index } from '../pages';
import { Container } from '../assets/styles/GlobalStyles';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
    <Route
      path='/home'
      element={
        <>
          <NavBar />
          <Container>
            <Home />
          </Container>
        </>
      }
    />
  </Switch>
);

export default Routes;
