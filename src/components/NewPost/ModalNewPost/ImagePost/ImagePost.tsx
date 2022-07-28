/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { Container, Img } from './ImagePost.styles';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import { useCreatePostMutation } from '../../../../services/api/post.api';

const schema = yup
  .object()
  .shape({
    img: yup.mixed(),
  })
  .required();

const ImagePost: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [imgUrl, setImgUrl] = useState('');
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

  const resetImages = () => {
    URL.revokeObjectURL(imgUrl);
    reset();
  };

  useEffect(() => {
    if (!isOpen) {
      resetImages();
    }
  }, [isOpen]);

  const onSubmit = async (e: any) => {
    const data: {
      img: FileList;
    } = e;

    try {
      const formData = new FormData();
      if (data?.img[0]) formData.append('img', data?.img[0]);

      // await createPost(formData).unwrap();
      return toast.success('Post criado');
      // return navigate(0);
    } catch (error) {
      return toast.error('Erro desconhecido');
    }
  };

  const handleChangeImg = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImgUrl(url);
  };

  return (
    <Container>
      {isCreating ? (
        <LogoLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='file'
            {...register('img')}
            id='img'
            onChange={handleChangeImg}
          />
          <Img htmlFor='img' url={imgUrl}>
            <div />
          </Img>
          <input type='submit' value='enviar' />
        </form>
      )}
    </Container>
  );
};

export default ImagePost;
