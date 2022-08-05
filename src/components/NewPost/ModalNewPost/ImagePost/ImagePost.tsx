/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container, Img } from './ImagePost.styles';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import { useCreatePostMutation } from '../../../../services/api/post.api';
import { FILE_SIZE, SUPPORTED_FORMATS } from '../../../../constants';

const schema = yup
  .object()
  .shape({
    title: yup.string().max(200).required('Titulo é obrigatório'),
    image: yup
      .mixed()
      .test(
        'isRequired',
        'Imagem é obrigatória',
        (value: FileList) => value.length !== 0
      )
      .test(
        'fileSize',
        'O arquivo é grande demais',
        (value: FileList) => value[0] && value[0].size <= FILE_SIZE
      )
      .test(
        'fileType',
        'Arquivo não suportado',
        (value: FileList) =>
          value[0] && SUPPORTED_FORMATS.includes(value[0].type)
      )
      .required(),
  })
  .required();

const ImagePost: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [imgUrl, setImgUrl] = useState('');
  const [imgData, setImgData] = useState('');
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
      title: string;
      image: FileList;
    } = e;

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('image', imgData);

      await createPost(formData).unwrap();
      toast.success('Post criado');
      return navigate(0);
    } catch (error) {
      return toast.error('Erro desconhecido');
    }
  };

  const handleChangeImg = (e: any) => {
    if (e.target.files[0]) {
      setImgData(e.target.files[0]);
      URL.revokeObjectURL(imgUrl);
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    } else {
      const dataTF = new DataTransfer();
      dataTF.items.add(imgData as any);
      e.target.files = dataTF.files;
    }
  };

  const titleError = errors.title as any;
  const imageError = errors.image as any;

  return (
    <Container>
      {isCreating ? (
        <LogoLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{titleError?.message}</p>
          <input {...register('title')} id='title' />
          <input
            type='file'
            {...register('image')}
            id='image'
            onChange={handleChangeImg}
          />
          <Img htmlFor='image' url={imgUrl}>
            <div />
          </Img>
          <p>{imageError?.message}</p>
          <input type='submit' value='enviar' />
        </form>
      )}
    </Container>
  );
};

export default ImagePost;
