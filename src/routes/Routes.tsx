import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Index } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
  </Switch>
);

export default Routes;
