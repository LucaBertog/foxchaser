import React from 'react';

import {
  Container,
  Top,
  MenuAvatar,
  Logo,
  SearchIcon,
  NewPost,
  Bottom,
  Home,
  News,
  Games,
  Notifications,
  Chat,
  IconWrapper,
} from './NavBar.mobile.styles';

import { logoFoxChaser } from '../../assets/styles/Icons';

const Mobile: React.FC = () => (
  <Container>
    <Top>
      <MenuAvatar />
      <Logo src={logoFoxChaser} />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Top>
    <NewPost />
    <Bottom>
      <IconWrapper>
        <Home />
      </IconWrapper>
      <IconWrapper>
        <News />
      </IconWrapper>
      <IconWrapper>
        <Games />
      </IconWrapper>
      <IconWrapper>
        <Notifications />
      </IconWrapper>
      <IconWrapper>
        <Chat />
      </IconWrapper>
    </Bottom>
  </Container>
);

export default Mobile;
