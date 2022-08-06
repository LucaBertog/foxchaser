import React, { useContext, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import Content from '../../components/Chat/Content/Content';
import LeftBar from '../../components/Chat/LeftBar/LeftBar';
import RightBar from '../../components/Chat/RightBar/RightBar';
import { ChatContext } from '../../contexts/Chat.context';
import { UserContext } from '../../contexts/User.context';
import { UserSocket } from '../../interfaces/userSocket.interface';
import { Container } from './Chat.styles';

const socket = io(import.meta.env.VITE_BACKEND_URL);

const Chat: React.FC = () => {
  const { id, username } = useContext(UserContext);
  const [onlineUsers, setOnlineUsers] = useState<UserSocket[]>([]);

  const chatContext = useMemo(
    () => ({
      socket,
      onlineUsers,
    }),
    [socket]
  );

  console.log(onlineUsers);

  useEffect(() => {
    if (id) socket.emit('newUser', { userId: id, username });

    // socket.emit('newPrivateMessage', {
    //   receiver: 'id de quem recebe',
    //   sender: id,
    //   text: 'a mensagem enviada',
    // });
    // socket.on('reloadedMessages', ({ newMessages }) =>
    //   console.log(newMessages)
    // );
    // socket.emit('reloadPrivateMessages', {
    //   userId: 'id de quem recebe',
    //   friendId: id,
    // });
  }, [id]);

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
