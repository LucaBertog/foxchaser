import React from 'react';
import CardProfile from '../ProfileCard/ProfileCard';
import ProfileLevel from '../ProfileLevel/ProfileLevel';
import NavProfile from '../ProfileNav/ProfileNav';

import { Container, Wrapper } from './ProfileInfo.styles';
import coverImg from '../../../assets/imgs/coverimg.png';

const ProfileInfo: React.FC = () => (
  <Container url={coverImg}>
    <CardProfile />
    <Wrapper>
      <ProfileLevel />
      <NavProfile />
    </Wrapper>
  </Container>
);

export default ProfileInfo;
