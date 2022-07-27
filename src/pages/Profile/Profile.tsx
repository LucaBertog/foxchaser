/* eslint-disable no-underscore-dangle */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PostSeparator, PostsWrapper } from '../../assets/styles/GlobalStyles';
import { LogoLoader, Post, ProfileInfo } from '../../components';
import { ProfileContext } from '../../contexts/Profile.context';
import { DecodedUser } from '../../interfaces/decodedUser.interface';
import { useGetProfileQuery } from '../../services/api/profile.api';
import { decodeJWT } from '../../services/decode/decodeJwt';
import { selectToken } from '../../store/Auth/reducer';

import { Container } from './Profile.styles';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = useSelector(selectToken);

  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const { data: userProfile, isLoading } = useGetProfileQuery(id || '');

  useEffect(() => {
    if (!token) return navigate('/', { replace: true });
    const currentUser = decodeJWT<DecodedUser>(token);

    if (id === currentUser._id) return setIsCurrentUser(true);
    return setIsCurrentUser(false);
  }, [id, token]);

  // useEffect(() => {
  //   if (error) navigate('500');
  // }, [error]);

  const profileContext = useMemo(
    () => ({
      name: userProfile?.name || '',
      username: userProfile?.username || '',
      description: userProfile?.description || '',
      profilePicture: userProfile?.profilePicture || '',
      coverPicture: userProfile?.coverPicture || '',
      isCurrentUser,
    }),
    [userProfile, isCurrentUser]
  );

  return (
    <ProfileContext.Provider value={profileContext}>
      {isLoading ? (
        <Container>
          <LogoLoader />
        </Container>
      ) : (
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
      )}
    </ProfileContext.Provider>
  );
};

export default Profile;
