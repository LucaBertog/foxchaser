/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './Header.styles';
import { MenuAvatar, Logo, IconWrapper } from '../../assets/styles/IconsNavBar';
import emptyImg from '../../assets/imgs/empty.jpg';
import { logoFoxChaser } from '../../assets/styles/Icons';
import { SearchBar as Search } from '..';
import { selectToken } from '../../store/Auth/reducer';
import { DecodedUser } from '../../interfaces/decodedUser.interface';
import { decodeJWT } from '../../services/decode/decodeJwt';

const Header: React.FC = () => {
  const token = useSelector(selectToken);
  const currentUser = decodeJWT<DecodedUser>(token);

  return (
    <Container>
      <Link to={`/profile/${currentUser._id}`}>
        <MenuAvatar src={emptyImg} />
      </Link>
      <Link to='/home/'>
        <Logo src={logoFoxChaser} />
      </Link>
      <IconWrapper>
        <Search isMobile />
      </IconWrapper>
    </Container>
  );
};

/* <NewPost>
  <Plus />
</NewPost> */

export default Header;
