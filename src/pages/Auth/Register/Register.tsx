/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Title, HiddenInput } from '../AuthForm.styles';
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

          <p>{userNameError?.message}</p>
          <input placeholder='Nome de usuário' {...register('userName')} />
          <p>{emailError?.message}</p>
          <input placeholder='E-mail' {...register('email')} />
          <p>{passwordError?.message}</p>
          <input
            placeholder='Senha'
            type='password'
            {...register('password')}
          />

          <input type='submit' value='Finalizar registro' />
        </form>
      </Container>
    </AuthContainer>
  );
};

export default Register;
