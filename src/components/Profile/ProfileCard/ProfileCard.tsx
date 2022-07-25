import React, { useContext } from 'react';

import {
  Container,
  Wrapper,
  ProfilePic,
  Username,
  Emblems,
  EditProfile,
} from './ProfileCard.styles';
import emptyImg from '../../../assets/imgs/empty.jpg';
import { ProfileContext } from '../../../contexts/Profile.context';

const CardProfile: React.FC = () => {
  const { username, isCurrentUser } = useContext(ProfileContext);

  return (
    <Container>
      <Wrapper>
        <ProfilePic src={emptyImg} />
        <Username>{username}</Username>
        <Emblems />
        {isCurrentUser ? <EditProfile>Editar perfil</EditProfile> : 'Oi'}
      </Wrapper>
    </Container>
  );
};

export default CardProfile;
