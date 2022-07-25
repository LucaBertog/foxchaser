/* eslint-disable no-underscore-dangle */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../../components';
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
      </Container>
    </ProfileContext.Provider>
  );
};

export default Profile;
