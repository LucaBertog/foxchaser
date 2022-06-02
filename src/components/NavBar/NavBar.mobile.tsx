import React from 'react';

import {
  Container,
  Top,
  MenuAvatar,
  Logo,
  Search,
  NewPost,
  Bottom,
  Home,
  News,
  Games,
  Notifications,
  Chat,
  IconWrapper,
} from './NavBar.mobile.styles';
import emptyImg from '../../assets/imgs/empty.jpg';

import { logoFoxChaser } from '../../assets/styles/Icons';

const Mobile: React.FC = () => (
  <Container>
    <Top>
      <MenuAvatar src={emptyImg} />
      <Logo src={logoFoxChaser} />
      <IconWrapper>
        <Search />
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
      <IconWrapper isGame>
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
