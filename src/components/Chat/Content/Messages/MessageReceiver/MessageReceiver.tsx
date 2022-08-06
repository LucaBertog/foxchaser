import React from 'react';
import { Container, Message, Avatar } from './MessageReceiver.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const MessageReceiver: React.FC<{ message: string; avatar: string }> = ({
  message,
  avatar,
}) => (
  <Container>
    <Avatar src={avatar?.split(' ')[0] || NoPP} />
    <Message>{message}</Message>
  </Container>
);

export default MessageReceiver;
