import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Header.styles';
import { MenuAvatar, Logo, IconWrapper } from '../../assets/styles/IconsNavBar';
import emptyImg from '../../assets/imgs/empty.jpg';
import { logoFoxChaser } from '../../assets/styles/Icons';
import { SearchBar as Search } from '..';
import { UserContext } from '../../contexts/User.context';

const Header: React.FC = () => {
  const { id, profilePicture } = useContext(UserContext);

  return (
    <Container>
      <Link to={`/profile/${id}`}>
        <MenuAvatar src={profilePicture.split(' ')[0] || emptyImg} />
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
