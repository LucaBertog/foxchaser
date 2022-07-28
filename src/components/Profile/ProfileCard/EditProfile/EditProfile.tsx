/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../../contexts/Profile.context';
import {
  Overlay,
  ModalStyle,
  ImageWrapper,
  ProfilePicture,
  CameraIcon,
  FinishButtonsWrapper,
  CancelButton,
  SaveButton,
  RestWrapper,
  CoverPicture,
  Title,
  NameInput,
} from './EditProfile.styles';
import { useEditProfileMutation } from '../../../../services/api/profile.api';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import emptyImg from '../../../../assets/imgs/empty.jpg';

Modal.setAppElement('#root');
const schema = yup
  .object()
  .shape({
    profilePicture: yup.mixed(),
    coverPicture: yup.mixed(),
    name: yup
      .string()
      .transform((value) => (value === '' ? undefined : value))
      .min(2, 'Mínimo de 2 caracteres')
      .max(50, 'Máximo de 50 caracteres'),
  })
  .required();

const EditProfile: React.FC<{
  isOpen: boolean;
  onRequestClose: any;
  setIsOpen: any;
}> = ({ isOpen, onRequestClose, setIsOpen }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { profilePicture, coverPicture, name } = useContext(ProfileContext);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [coverPictureUrl, setCoverPictureUrl] = useState('');
  const [editProfile, { isLoading: isUpdating }] = useEditProfileMutation();

  const resetImages = () => {
    URL.revokeObjectURL(profilePictureUrl);
    URL.revokeObjectURL(coverPictureUrl);
    setProfilePictureUrl('');
    setCoverPictureUrl('');
  };

  useEffect(() => {
    if (!isOpen) {
      resetImages();
    }
  }, [isOpen]);

  const onSubmit = async (e: any) => {
    const data: {
      profilePicture: FileList;
      coverPicture: FileList;
      name: string;
    } = e;
    try {
      const formData = new FormData();

      if (data?.profilePicture[0])
        formData.append('picture', data?.profilePicture[0]);
      if (data?.coverPicture[0])
        formData.append('cover', data?.coverPicture[0]);
      if (data?.name) formData.append('name', data?.name);

      await editProfile(formData).unwrap();
      toast.success('Perfil editado');
      return navigate(0);
    } catch (error) {
      return toast.error('Erro desconhecido');
    }
  };

  const handleClickCancel = () => {
    resetImages();
    setIsOpen(false);
  };

  const handleChangeProfilePicture = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setProfilePictureUrl(url);
  };

  const handleChangeCoverPicture = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setCoverPictureUrl(url);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='_'
      overlayElement={(props, contentElement) => (
        <Overlay {...props}>{contentElement}</Overlay>
      )}
      className='_'
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
    >
      {isUpdating ? (
        <LogoLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ImageWrapper isProfilePicture>
            <input
              type='file'
              {...register('profilePicture')}
              id='profilePicture'
              onChange={handleChangeProfilePicture}
            />
            <ProfilePicture
              htmlFor='profilePicture'
              url={
                profilePictureUrl || profilePicture.split(' ')[0] || emptyImg
              }
            >
              <div />
            </ProfilePicture>
            <CameraIcon />
          </ImageWrapper>
          <FinishButtonsWrapper>
            <CancelButton onClick={handleClickCancel}>Cancelar</CancelButton>
            <SaveButton type='submit' value='Salvar' />
          </FinishButtonsWrapper>
          <RestWrapper>
            <Title>Banner</Title>
            <ImageWrapper isProfilePicture={false}>
              <input
                {...register('coverPicture')}
                id='coverPicture'
                type='file'
                onChange={handleChangeCoverPicture}
              />
              <CoverPicture
                htmlFor='coverPicture'
                url={coverPictureUrl || coverPicture.split(' ')[0] || emptyImg}
              >
                <div />
              </CoverPicture>
              <CameraIcon />
            </ImageWrapper>
            <Title>Nome</Title>
            <NameInput {...register('name')} id='name' placeholder={name} />
          </RestWrapper>
        </form>
      )}
    </Modal>
  );
};

export default EditProfile;
