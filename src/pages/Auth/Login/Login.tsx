/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Title, UnderLine, WrapperInput } from '../AuthForm.styles';
import { AuthContainer } from '../../../components';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    password: yup
      .string()
      .min(4, 'Mínimo de 4 caracteres')
      .required('Senha é obrigatória'),
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

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log(data, errors);

  const emailError = errors.email as any;
  const passwordError = errors.password as any;

  return (
    <AuthContainer isPageLogin>
      <Container>
        <Title>Iniciar sessão</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <input type='submit' value='Fazer login' />
        </form>
      </Container>
    </AuthContainer>
  );
};

export default Login;
