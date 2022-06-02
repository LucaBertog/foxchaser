import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Home, Index } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
    <Route path='/home' element={<Home />} />
  </Switch>
);

export default Routes;
