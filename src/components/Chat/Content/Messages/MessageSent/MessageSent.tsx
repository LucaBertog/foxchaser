import React from 'react';
import { Container, Message, Avatar } from './MessageSent.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const MessageSent: React.FC = () => (
  <Container>
    <Message>
      Comi coco ontem a noite sabia disso serio mano muito foda faaa Comi coco
      ontem a noite sabia disso serio mano muito foda faaaComi coco ontem a
      noite sabia disso serio mano muito foda faaa
    </Message>
    <Avatar src={NoPP} />
  </Container>
);

export default MessageSent;
