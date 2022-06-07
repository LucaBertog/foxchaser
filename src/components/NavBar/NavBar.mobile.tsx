import React from 'react';

import { Container } from './NavBar.mobile.styles';
import {
  Home,
  News,
  Games,
  Notifications,
  Chat,
  IconWrapper,
} from '../../assets/styles/IconsNavBar';

const Mobile: React.FC = () => (
  <Container>
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
  </Container>
);

export default Mobile;
