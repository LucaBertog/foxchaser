/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
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
  .object({
    userName: yup.string().required(),
    email: yup.string().email('Email errado').required(),
    password: yup.string().min(4, 'Minimo de 4 caracteres').required(),
  })
  .required();

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data, errors);

  const userNameError = errors.userName as any;
  const emailError = errors.email as any;
  const passwordError = errors.password as any;

  return (
    <AuthContainer>
      <Container>
        <Title>Comece sua experiência</Title>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <HiddenInput {...register('userName_')} />
          <HiddenInput type='password' />

          <WrapperInput>
            <p>{userNameError?.message}</p>
            <input {...register('userName')} id='userName' />
            <UnderLine />
            <label htmlFor='userName'>Nome de usuário</label>
          </WrapperInput>
          <WrapperInput>
            <p>{emailError?.message}</p>
            <input {...register('email')} id='email' />
            <UnderLine />
            <label htmlFor='email'>E-mail</label>
          </WrapperInput>
          <WrapperInput>
            <p>{passwordError?.message}</p>
            <input type='password' {...register('password')} id='password' />
            <UnderLine />
            <label htmlFor='password'>Senha</label>
          </WrapperInput>

          <input type='submit' value='Finalizar registro' />
        </form>
      </Container>
    </AuthContainer>
  );
};

export default Register;
