import React from 'react';

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

const Content: React.FC = () => (
  <Container>
    <Header>
      <Wrapper>
        <Image src={NoPP} />
        <Name>Churumelas</Name>
      </Wrapper>
      <MoreOptions />
    </Header>
    <Messages />
    <NewMessageWrapper>
      <AttachIcon />
      <NewMessage type='text' placeholder='Escreva aqui...' />
    </NewMessageWrapper>
  </Container>
);

export default Content;
