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

const CardProfile: React.FC = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { profilePicture, name, username, isCurrentUser } =
    useContext(ProfileContext);

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
        {isCurrentUser ? (
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
