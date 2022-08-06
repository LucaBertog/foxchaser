import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../../../contexts/User.context';
import { useGetAllFriendsQuery } from '../../../../services/api/user.api';
import {
  selectedUser,
  selectUserSelected,
} from '../../../../store/Chat/reducer';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import Channel from './Channel/Channel';
import { Container } from './Channels.styles';

const Channels: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useContext(UserContext);
  const { data: friends, isLoading } = useGetAllFriendsQuery(id || skipToken);
  const userSelected = useSelector(selectUserSelected);

  const handleClick = (friendId: string) => {
    dispatch(selectedUser(friendId));
  };

  return (
    <Container>
      {isLoading ? (
        <LogoLoader />
      ) : (
        friends?.friends.map((friend) => (
          <Channel
            onClick={() => handleClick(friend.id)}
            key={friend.id}
            name={friend.name}
            image={friend.profilePicture}
            isSelected={userSelected === friend.id}
          />
        ))
      )}
    </Container>
  );
};

export default Channels;
