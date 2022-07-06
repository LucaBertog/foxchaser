/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
    userName: yup
      .string()
      .min(2, 'Mínimo de 2 caracteres')
      .max(50, 'Máximo de 50 caracteres')
      .required('Nome de usuário é obrigatório'),
    email: yup
      .string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    password: yup
      .string()
      .min(4, 'Minimo de 4 caracteres')
      .required('Senha é obrigatória'),
  })
  .required();

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
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

          <WrapperInput inputValue={watch('userName')} error={userNameError}>
            <input {...register('userName')} id='userName' />
            <UnderLine />
            <label htmlFor='userName'>Nome de usuário</label>
            <p>{userNameError?.message}</p>
          </WrapperInput>
          <WrapperInput inputValue={watch('email')} error={emailError}>
            <input {...register('email')} id='email' />
            <UnderLine />
            <label htmlFor='email'>E-mail</label>
            <p>{emailError?.message}</p>
          </WrapperInput>
          <WrapperInput inputValue={watch('password')} error={passwordError}>
            <input type='password' {...register('password')} id='password' />
            <UnderLine />
            <label htmlFor='password'>Senha</label>
            <p>{passwordError?.message}</p>
          </WrapperInput>

          <input type='submit' value='Finalizar registro' />
        </form>
      </Container>
    </AuthContainer>
  );
};

export default Register;
