import React from 'react';
import Content from '../../components/Chat/Content/Content';
import LeftBar from '../../components/Chat/LeftBar/LeftBar';
import RightBar from '../../components/Chat/RightBar/RightBar';

import { Container } from './Chat.styles';

const Chat: React.FC = () => (
  <Container>
    <LeftBar />
    <Content />
    <RightBar />
  </Container>
);

export default Chat;
