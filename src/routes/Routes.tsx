import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { NavBar, NewPost, Sidebar } from '../components';
import {
  Chat,
  Home,
  Index,
  Login,
  Profile,
  Register,
  Admin,
  NotFound,
} from '../pages';
import { Container, GlobalWrapper } from '../assets/styles/GlobalStyles';
import AdministratorRoute from './AdministratorRoute';

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
      path='/profile/:username'
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
    <Route
      path='/messages/'
      element={
        <>
          <NavBar />
          <Container>
            <GlobalWrapper full>
              <Chat />
            </GlobalWrapper>
          </Container>
        </>
      }
    />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/fxcsr' element={<AdministratorRoute />}>
      <Route path='/fxcsr' element={<Admin />} />
    </Route>
    <Route
      path='*'
      element={
        <>
          <NavBar />
          <Container>
            <NotFound />
          </Container>
        </>
      }
    />
  </Switch>
);

export default Routes;
