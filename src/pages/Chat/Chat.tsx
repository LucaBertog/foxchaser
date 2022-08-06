import React, { useContext, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';
import Content from '../../components/Chat/Content/Content';
import LeftBar from '../../components/Chat/LeftBar/LeftBar';
import RightBar from '../../components/Chat/RightBar/RightBar';
import { ChatContext } from '../../contexts/Chat.context';
import { UserContext } from '../../contexts/User.context';
import { Container } from './Chat.styles';

const socket = io(import.meta.env.VITE_BACKEND_URL);

const Chat: React.FC = () => {
  const { id, username } = useContext(UserContext);

  const chatContext = useMemo(
    () => ({
      socket,
    }),
    [socket]
  );

  useEffect(() => {
    console.log(id, username);
    if (id) {
      socket.emit('newUser', { userId: id, username });
      socket.on('getUsers', (users: any) => console.log(users));
    }
  }, [socket, id, socket]);

  return (
    <ChatContext.Provider value={chatContext}>
      <Container>
        <LeftBar />
        <Content />
        <RightBar />
      </Container>
    </ChatContext.Provider>
  );
};

export default Chat;
