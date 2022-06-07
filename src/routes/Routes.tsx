import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { NavBar } from '../components';
import { Home, Index } from '../pages';
import { GlobalContainer } from '../assets/styles/GlobalContainer';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
    <Route
      path='/home'
      element={
        <GlobalContainer>
          <NavBar />
          <Home />
        </GlobalContainer>
      }
    />
  </Switch>
);

export default Routes;
