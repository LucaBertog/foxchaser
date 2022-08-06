import React from 'react';
import { Container, Message, Avatar } from './MessageSent.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const MessageSent: React.FC<{ message: string; avatar: string }> = ({
  message,
  avatar,
}) => (
  <Container>
    <Message>{message}</Message>
    <Avatar src={avatar?.split(' ')[0] || NoPP} />
  </Container>
);

export default MessageSent;
