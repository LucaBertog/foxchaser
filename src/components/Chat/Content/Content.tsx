import React from 'react';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/dist/query';
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

const Content: React.FC = () => {
  const userSelected = useSelector(selectUserSelected);
  const { data: user, isLoading } = useGetUserByIdQuery(
    userSelected || skipToken
  );

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
            <NewMessage type='text' placeholder='Escreva aqui...' />
          </NewMessageWrapper>
        </>
      )}
    </Container>
  );
};

export default Content;
