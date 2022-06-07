import React from 'react';

import { Container } from './Header.styles';
import {
  MenuAvatar,
  Logo,
  Search,
  IconWrapper,
} from '../../assets/styles/IconsNavBar';
import emptyImg from '../../assets/imgs/empty.jpg';
import { logoFoxChaser } from '../../assets/styles/Icons';

const Header: React.FC = () => (
  <Container>
    <MenuAvatar src={emptyImg} />
    <Logo src={logoFoxChaser} />
    <IconWrapper>
      <Search />
    </IconWrapper>
  </Container>
);

/* <NewPost>
  <Plus />
</NewPost> */

export default Header;
