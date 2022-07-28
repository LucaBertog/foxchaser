import React, { useContext } from 'react';
import CardProfile from '../ProfileCard/ProfileCard';
import ProfileLevel from '../ProfileLevel/ProfileLevel';
import NavProfile from '../ProfileNav/ProfileNav';

import { Container, Wrapper } from './ProfileInfo.styles';
import emptyImg from '../../../assets/imgs/empty.jpg';
import { ProfileContext } from '../../../contexts/Profile.context';

const ProfileInfo: React.FC = () => {
  const { coverPicture } = useContext(ProfileContext);

  return (
    <Container url={coverPicture.split(' ')[0] || emptyImg}>
      <CardProfile />
      <Wrapper>
        <ProfileLevel />
        <NavProfile />
      </Wrapper>
    </Container>
  );
};

export default ProfileInfo;
