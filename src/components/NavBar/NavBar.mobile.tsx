import React from 'react';

import { Link } from 'react-router-dom';
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
    <Link to='/messages/'>
      <IconWrapper>
        <Chat />
      </IconWrapper>
    </Link>
  </Container>
);

export default Mobile;
