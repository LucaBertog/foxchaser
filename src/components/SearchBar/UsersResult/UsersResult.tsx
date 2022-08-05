import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoPPImg from '../../../assets/imgs/NoPP.png';
import { UserContext } from '../../../contexts/User.context';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../../services/api/user.api';
import {
  Container,
  User,
  Wrapper,
  Avatar,
  Name,
  Username,
  FollowIcon,
  UnfollowIcon,
} from './UsersResult.styles';
import { User as UserInterface } from '../../../interfaces/user.interface';

const UsersResult: React.FC<{
  query: string | undefined;
  results: { usersResult: UserInterface[] } | undefined;
  closeModal: any;
}> = ({ query, results, closeModal }) => {
  const { followings, setIsRender } = useContext(UserContext);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const usersExistsQuery =
    results?.usersResult.length && results?.usersResult.length > 0 && query;

  const users = results?.usersResult.map((user) => {
    const handleFollowUser = async () => {
      try {
        await followUser(user.id).unwrap();
        toast.success('Usuário foi seguido');
        return setIsRender(false);
      } catch (error: any) {
        if (error?.data.message) return toast.error(error.data.message);
        return toast.error('Erro desconhecido');
      }
    };

    const handleUnfollowUser = async () => {
      try {
        await unfollowUser(user.id).unwrap();
        toast.success('Você parou de seguir esse usuário');
        return setIsRender(false);
      } catch (error: any) {
        if (error?.data.message) return toast.error(error.data.message);
        return toast.error('Erro desconhecido');
      }
    };

    const checkIfUserAlreadyFollows = () => {
      if (followings.includes(user.id)) {
        return (
          <UnfollowIcon onClick={handleUnfollowUser}>
            Parar de seguir
          </UnfollowIcon>
        );
      }

      return <FollowIcon onClick={handleFollowUser}>Seguir</FollowIcon>;
    };

    return (
      <User key={user.id}>
        <Link
          to={`/profile/${user.username}`}
          onClick={closeModal}
          key={user.id}
        >
          <Avatar src={user.profilePicture.split(' ')[0] || NoPPImg} />
          <Name>{user.name}</Name>
          <Username>@{user.username}</Username>
        </Link>
        <Wrapper>{checkIfUserAlreadyFollows()}</Wrapper>
      </User>
    );
  });

  return <Container>{usersExistsQuery ? users : ''}</Container>;
};

export default UsersResult;
