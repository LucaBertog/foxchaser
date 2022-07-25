import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { NavBar, NewPost, Sidebar } from '../components';
import { Home, Index, Login, Profile, Register } from '../pages';
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
            <Sidebar />
          </Container>
          <NewPost />
        </>
      }
    />
    <Route
      path='/profile/:id'
      element={
        <>
          <NavBar />
          <Container>
            <Profile />
            <Sidebar />
          </Container>
          <NewPost />
        </>
      }
    />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Switch>
);

export default Routes;
