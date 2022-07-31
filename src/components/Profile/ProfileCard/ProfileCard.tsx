import React, { useContext, useState } from 'react';

import {
  Container,
  Wrapper,
  ProfilePic,
  Name,
  Username,
  Emblems,
  EditProfileButton,
} from './ProfileCard.styles';
import emptyImg from '../../../assets/imgs/empty.jpg';
import { ProfileContext } from '../../../contexts/Profile.context';
import EditProfile from './EditProfile/EditProfile';
import { UserContext } from '../../../contexts/User.context';

const CardProfile: React.FC = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { id, profilePicture, name, username } = useContext(ProfileContext);
  const { id: currentUserId } = useContext(UserContext);

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <ProfilePic src={profilePicture.split(' ')[0] || emptyImg} />
        <Name>{name}</Name>
        <Username>@{username}</Username>
        <Emblems />
        {id === currentUserId ? (
          <EditProfileButton onClick={openEditProfileModal}>
            Editar perfil
          </EditProfileButton>
        ) : (
          'Oi'
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
