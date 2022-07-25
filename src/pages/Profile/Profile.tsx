/* eslint-disable no-underscore-dangle */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostSeparator, PostsWrapper } from '../../assets/styles/GlobalStyles';
import { Post, ProfileInfo } from '../../components';
import { ProfileContext } from '../../contexts/Profile.context';
import { DecodedUser } from '../../interfaces/decodedUser.interface';
import { decodeJWT } from '../../services/decode/decodeJwt';
import { selectToken } from '../../store/Auth/reducer';

import { Container } from './Profile.styles';

const Profile: React.FC = () => {
  const { id } = useParams();
  const token = useSelector(selectToken);
  const currentUser = decodeJWT<DecodedUser>(token);
  const { username } = currentUser;
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    if (id === currentUser._id) return setIsCurrentUser(true);
    return setIsCurrentUser(false);
  }, [id, currentUser]);

  const profileContext = useMemo(
    () => ({
      username,
      isCurrentUser,
    }),
    [username, isCurrentUser]
  );

  return (
    <ProfileContext.Provider value={profileContext}>
      <Container>
        <ProfileInfo />
        <PostsWrapper>
          <Post />
          <PostSeparator />
          <Post />
          <PostSeparator />
          <Post />
          <PostSeparator />
          <Post />
          <PostSeparator />
          <Post />
          <PostSeparator />
        </PostsWrapper>
      </Container>
    </ProfileContext.Provider>
  );
};

export default Profile;
