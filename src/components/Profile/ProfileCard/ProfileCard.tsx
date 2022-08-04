import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Wrapper,
  ProfilePic,
  Name,
  Username,
  Emblems,
  EditProfileButton,
  FollowButton,
} from './ProfileCard.styles';
import NoPP from '../../../assets/imgs/NoPP.png';
import { ProfileContext } from '../../../contexts/Profile.context';
import EditProfile from './EditProfile/EditProfile';
import { UserContext } from '../../../contexts/User.context';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../../services/api/user.api';

const CardProfile: React.FC = () => {
  const navigate = useNavigate();
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { id, profilePicture, name, username } = useContext(ProfileContext);
  const { id: currentUserId, followings } = useContext(UserContext);

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const handleFollowUser = async () => {
    try {
      await followUser(id).unwrap();
      return navigate(0);
    } catch (error: any) {
      if (error?.data.message) return toast.error(error.data.message);
      return toast.error('Erro desconhecido');
    }
  };

  const handleUnfollowUser = async () => {
    try {
      await unfollowUser(id).unwrap();
      return navigate(0);
    } catch (error: any) {
      if (error?.data.message) return toast.error(error.data.message);
      return toast.error('Erro desconhecido');
    }
  };

  const checkIfUserAlreadyFollows = () => {
    if (followings.includes(id)) {
      return (
        <FollowButton onClick={handleUnfollowUser}>
          Parar de seguir
        </FollowButton>
      );
    }

    return <FollowButton onClick={handleFollowUser}>Seguir</FollowButton>;
  };

  return (
    <Container>
      <Wrapper>
        <ProfilePic src={profilePicture.split(' ')[0] || NoPP} />
        <Name>{name}</Name>
        <Username>@{username}</Username>
        <Emblems />
        {id === currentUserId ? (
          <EditProfileButton onClick={openEditProfileModal}>
            Editar perfil
          </EditProfileButton>
        ) : (
          checkIfUserAlreadyFollows()
        )}
      </Wrapper>
      <EditProfile
        isOpen={isEditProfileModalOpen}
        onRequestClose={closeEditProfileModal}
        setIsOpen={setIsEditProfileModalOpen}
      />
    </Container>
  );
};

export default CardProfile;
