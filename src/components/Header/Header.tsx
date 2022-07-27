/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [currentUser, setCurrentUser] = useState<DecodedUser>();

  useEffect(() => {
    if (!token) return navigate('/', { replace: true });
    const user = decodeJWT<DecodedUser>(token);
    return setCurrentUser(user);
  }, [token]);

  return (
    <Container>
      <Link to={`/profile/${currentUser?._id}`}>
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
