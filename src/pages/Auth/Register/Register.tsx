/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Container,
  Title,
  HiddenInput,
  UnderLine,
  WrapperInput,
} from '../AuthForm.styles';
import { AuthContainer, LogoLoader } from '../../../components';
import { useRegisterMutation } from '../../../services/api/auth.api';

const schema = yup
  .object({
    username: yup
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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [registerUser] = useRegisterMutation();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ username, email, password }: any) => {
    try {
      setIsLoading(true);
      await registerUser({
        username,
        email,
        password,
      }).unwrap();
      toast.success('Conta criada');
      setIsLoading(false);
      return navigate('/login/');
    } catch (error: any) {
      setIsLoading(false);
      if (error.data.errors) {
        return error.data.errors.forEach((err: string) => toast.error(err));
      }
      return toast.error('Erro desconhecido');
    }
  };

  const usernameError = errors.username as any;
  const emailError = errors.email as any;
  const passwordError = errors.password as any;

  return (
    <AuthContainer isPageLogin={false}>
      {isLoading ? (
        <Container>
          <LogoLoader />
        </Container>
      ) : (
        <Container>
          <Title>Comece sua experiência</Title>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <HiddenInput {...register('username_')} />
            <HiddenInput type='password' />

            <WrapperInput inputValue={watch('username')} error={usernameError}>
              <input {...register('username')} id='username' />
              <UnderLine />
              <label htmlFor='username'>Nome de usuário</label>
              <p>{usernameError?.message}</p>
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
      )}
    </AuthContainer>
  );
};

export default Register;
