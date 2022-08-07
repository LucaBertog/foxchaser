/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useCallback, useState } from 'react';
import { PathString, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container } from './TextPost.styles';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import { useCreatePostMutation } from '../../../../services/api/post.api';

const schema = yup
  .object()
  .shape({
    title: yup.string().max(200).required('Titulo é obrigatório'),
    text: yup.string().max(500).required('Conteudo é obrigatório'),
  })
  .required();

const TextPost: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

  const onSubmit = async (e: any) => {
    const data: {
      title: string;
      text: PathString;
    } = e;
  };

  const titleError = errors.title as any;
  const textError = errors.text as any;

  return <Container>{isCreating ? <LogoLoader /> : ''}</Container>;
};

export default TextPost;
