/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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
import NoPP from '../../../../assets/imgs/NoPP.png';
import NoCP from '../../../../assets/imgs/NoCP.png';
import { FILE_SIZE, SUPPORTED_FORMATS } from '../../../../constants';
import { ProfileContext } from '../../../../contexts/Profile.context';

Modal.setAppElement('#root');
const schema = yup
  .object()
  .shape({
    profilePicture: yup
      .mixed()
      .test(
        'fileSize',
        'O arquivo é grande demais',
        (value: FileList) => value.length === 0 || value[0].size <= FILE_SIZE
      )
      .test(
        'fileType',
        'Arquivo não suportado',
        (value: FileList) =>
          value.length === 0 || SUPPORTED_FORMATS.includes(value[0].type)
      ),
    coverPicture: yup
      .mixed()
      .test(
        'fileSize',
        'O arquivo é grande demais',
        (value: FileList) => value.length === 0 || value[0].size <= FILE_SIZE
      )
      .test(
        'fileType',
        'Arquivo não suportado',
        (value: FileList) =>
          value.length === 0 || SUPPORTED_FORMATS.includes(value[0].type)
      ),
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { profilePicture, coverPicture, name } = useContext(ProfileContext);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [coverPictureUrl, setCoverPictureUrl] = useState('');
  const [profilePictureData, setProfilePictureData] = useState('');
  const [coverPictureData, setCoverPictureData] = useState('');
  const [editProfile, { isLoading: isUpdating }] = useEditProfileMutation();

  const resetImages = () => {
    URL.revokeObjectURL(profilePictureUrl);
    URL.revokeObjectURL(coverPictureUrl);
    setProfilePictureUrl('');
    setCoverPictureUrl('');
    reset();
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

      if (profilePictureData) formData.append('picture', profilePictureData);
      if (coverPictureData) formData.append('cover', coverPictureData);
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
    if (e.target.files[0]) {
      setProfilePictureData(e.target.files[0]);
      URL.revokeObjectURL(profilePictureUrl);
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setProfilePictureUrl(url);
    }
  };

  const handleChangeCoverPicture = (e: any) => {
    if (e.target.files[0]) {
      setCoverPictureData(e.target.files[0]);
      URL.revokeObjectURL(coverPictureUrl);
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setCoverPictureUrl(url);
    }
  };

  const profilePictureError = errors.profilePicture as any;
  const coverPictureError = errors.coverPicture as any;
  const nameError = errors.name as any;

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
              accept='image/*'
              onChange={handleChangeProfilePicture}
            />
            <ProfilePicture
              htmlFor='profilePicture'
              url={profilePictureUrl || profilePicture.split(' ')[0] || NoPP}
            >
              <div />
              <CameraIcon />
            </ProfilePicture>
          </ImageWrapper>
          <p>{profilePictureError?.message}</p>
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
                accept='image/*'
                onChange={handleChangeCoverPicture}
              />
              <CoverPicture
                htmlFor='coverPicture'
                url={coverPictureUrl || coverPicture.split(' ')[0] || NoCP}
              >
                <div />
                <CameraIcon />
              </CoverPicture>
            </ImageWrapper>
            <p>{coverPictureError?.message}</p>
            <Title>Nome</Title>
            <NameInput {...register('name')} id='name' placeholder={name} />
            <p>{nameError?.message}</p>
          </RestWrapper>
        </form>
      )}
    </Modal>
  );
};

export default EditProfile;
