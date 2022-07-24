/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, UnderLine, WrapperInput } from '../AuthForm.styles';
import { AuthContainer, LogoLoader } from '../../../components';
import { useLoginMutation } from '../../../services/api/auth.api';
import { addToken, selectToken } from '../../../store/Auth/reducer';

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
  const location: any = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loginUser] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const prevPath = location?.state ? location.state.prevPath : '/';

  const onSubmit = async ({ email, password }: any) => {
    try {
      setIsLoading(true);
      const response = await loginUser({
        email,
        password,
      }).unwrap();
      dispatch(addToken(response.access_token));
      setIsLoading(false);
      toast.success('Logado com sucesso');
      return navigate('/home/');
    } catch (error: any) {
      setIsLoading(false);
      if (error.data.errors)
        return error.data.errors.forEach((err: string) => toast.error(err));
      if (error.data.message) return toast.error('E-mail ou senha incorretos');
      return toast.error('Erro desconhecido');
    }
  };

  useEffect(() => {
    if (token) {
      navigate(prevPath);
    }
  }, [token, navigate, prevPath]);

  const emailError = errors.email as any;
  const passwordError = errors.password as any;

  return (
    <AuthContainer isPageLogin>
      {isLoading ? (
        <Container>
          <LogoLoader />
        </Container>
      ) : (
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
      )}
    </AuthContainer>
  );
};

export default Login;
