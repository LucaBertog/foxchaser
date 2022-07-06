/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Container,
  Title,
  HiddenInput,
  UnderLine,
  WrapperInput,
} from '../AuthForm.styles';
import { AuthContainer } from '../../../components';

const schema = yup
  .object()
  .shape({
    email: yup.string().email('Email errado').required(),
    password: yup.string().min(4, 'Minimo de 4 caracteres').required(),
  })
  .required();

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data, errors);

  const emailError = errors.email as any;
  const passwordError = errors.password as any;

  console.log(watch('email'), errors);

  return (
    <AuthContainer isPageLogin>
      <Container>
        <Title>Iniciar sessão</Title>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <HiddenInput {...register('userName_')} />
          <HiddenInput type='password' />

          <WrapperInput isEmpty={watch('email')}>
            <p>{emailError?.message}</p>
            <input {...register('email')} id='email' />
            <UnderLine />
            <label htmlFor='email'>E-mail</label>
          </WrapperInput>
          <WrapperInput isEmpty={watch('password')}>
            <p>{passwordError?.message}</p>
            <input type='password' {...register('password')} id='password' />
            <UnderLine />
            <label htmlFor='password'>Senha</label>
          </WrapperInput>

          <input type='submit' value='Fazer login' />
        </form>
      </Container>
    </AuthContainer>
  );
};

export default Login;
