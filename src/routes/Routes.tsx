import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { NavBar, NewPost, Sidebar } from '../components';
import { Home, Index, Login, Profile, Register } from '../pages';
import { Container, GlobalWrapper } from '../assets/styles/GlobalStyles';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
    <Route
      path='/home'
      element={
        <>
          <NavBar />
          <Container>
            <GlobalWrapper>
              <Home />
              <Sidebar />
            </GlobalWrapper>
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
            <GlobalWrapper>
              <Profile />
              <Sidebar />
            </GlobalWrapper>
          </Container>
          <NewPost />
        </>
      }
    />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='*' element={<p>Não encontrado</p>} />
  </Switch>
);

export default Routes;
