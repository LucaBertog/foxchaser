/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
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
import AdministratorRoute from './AdministratorRoute';
import PrivateRoute from './PrivateRoute';
import Main from '../layout/Main/Main';
import NavBar from '../layout/NavBar/NavBar';
import TextPost from '../components/NewPost/ModalNewPost/TextPost/TextPost';
import ImagePost from '../components/NewPost/ModalNewPost/ImagePost/ImagePost';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' element={<Index />} />
    <Route path='/home' element={<Main children={<Home />} />} />
    <Route
      path='/profile/:username'
      element={<Main children={<Profile />} />}
    />
    <Route path='/messages' element={<PrivateRoute />}>
      <Route path='/messages' element={<NavBar children={<Chat />} />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/fxcsr' element={<AdministratorRoute />}>
      <Route path='/fxcsr' element={<Admin />} />
    </Route>
    <Route path='*' element={<NavBar children={<NotFound />} />} />
    <Route
      path='/submit/wysiwyg'
      element={<NavBar children={<TextPost />} />}
    />
    <Route path='/submit/image' element={<NavBar children={<ImagePost />} />} />
  </Switch>
);

export default Routes;
