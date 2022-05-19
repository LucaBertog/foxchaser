import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Home />} />
  </Switch>
);

export default Routes;
