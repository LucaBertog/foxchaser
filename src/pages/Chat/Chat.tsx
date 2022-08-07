import React, { useEffect, useMemo, useState } from 'react';
import Content from '../../components/Chat/Content/Content';
import LeftBar from '../../components/Chat/LeftBar/LeftBar';
import RightBar from '../../components/Chat/RightBar/RightBar';
import { ChatContext } from '../../contexts/Chat.context';
import { UserSocket } from '../../interfaces/userSocket.interface';
import { Container } from './Chat.styles';
import { socket } from '../../App';

const Chat: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState<UserSocket[]>([]);

  const chatContext = useMemo(
    () => ({
      socket,
      onlineUsers,
    }),
    [socket, onlineUsers]
  );

  useEffect(() => {
    socket.on('onlineUsers', (users: UserSocket[]) => {
      setOnlineUsers(users);
    });
  }, [socket]);

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
