import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  Container,
  Header,
  Wrapper,
  Image,
  Name,
  MoreOptions,
  NewMessageWrapper,
  AttachIcon,
  NewMessage,
} from './Content.styles';
import NoPP from '../../../assets/imgs/NoPP.png';
import Messages from './Messages/Messages';
import { selectUserSelected } from '../../../store/Chat/reducer';
import { useGetUserByIdQuery } from '../../../services/api/user.api';
import LogoLoader from '../../LogoLoader/LogoLoader';
import { ChatContext } from '../../../contexts/Chat.context';
import { UserContext } from '../../../contexts/User.context';

const schema = yup
  .object()
  .shape({
    message: yup.string().max(500),
  })
  .required();

const Content: React.FC = () => {
  const { id } = useContext(UserContext);
  const { socket } = useContext(ChatContext);
  const userSelected = useSelector(selectUserSelected);
  const { data: user, isLoading } = useGetUserByIdQuery(
    userSelected || skipToken
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (socket && data.message) {
      socket.emit('newPrivateMessage', {
        receiver: userSelected,
        sender: id,
        text: data.message,
      });

      reset();
    }
  };

  return (
    <Container>
      {isLoading ? (
        <LogoLoader />
      ) : (
        <>
          <Header>
            <Wrapper>
              <Image src={user?.user.profilePicture.split(' ')[0] || NoPP} />
              <Name>{user?.user.name}</Name>
            </Wrapper>
            <MoreOptions />
          </Header>
          <Messages />
          <NewMessageWrapper>
            <AttachIcon />
            <form onSubmit={handleSubmit(onSubmit)}>
              <NewMessage
                {...register('message')}
                id='message'
                placeholder='Escreva aqui...'
              />
            </form>
          </NewMessageWrapper>
        </>
      )}
    </Container>
  );
};

export default Content;
