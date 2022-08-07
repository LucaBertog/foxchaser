/* eslint-disable no-underscore-dangle */
import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatContext } from '../../../../contexts/Chat.context';
import { UserContext } from '../../../../contexts/User.context';
import { Message } from '../../../../interfaces/message.interface';
import { useGetUserByIdQuery } from '../../../../services/api/user.api';
import { selectUserSelected } from '../../../../store/Chat/reducer';
import LogoLoader from '../../../LogoLoader/LogoLoader';
import MessageReceiver from './MessageReceiver/MessageReceiver';
import { Container } from './Messages.styles';
import MessageSent from './MessageSent/MessageSent';

const Messages: React.FC = () => {
  const { id } = useContext(UserContext);
  const { socket } = useContext(ChatContext);
  const userSelected = useSelector(selectUserSelected);
  const [messages, setMessages] = useState<Message[]>([]);
  const { data: currentUserData, isLoading: isLoadingCurrentUser } =
    useGetUserByIdQuery(id || skipToken);
  const { data: userSelectedData, isLoading: isLoadingUserSelected } =
    useGetUserByIdQuery(userSelected || skipToken);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (socket) {
      socket.on('newMessage', ({ messages: messagesUpdated }) =>
        console.log('Nova mensagem recebida', messagesUpdated)
      );

      socket.on('reloadedMessages', ({ messages: messagesUpdated }) => {
        setMessages(messagesUpdated);
      });

      socket.emit('reloadPrivateMessages', {
        userId: id,
        friendId: userSelected,
      });
    }
  }, [socket, userSelected]);

  useEffect(() => {
    if (scrollRef) {
      (scrollRef as any).current.scrollTop = (
        scrollRef as any
      ).current.scrollHeight;
    }
    // scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const messagesElement = () => {
    if (messages) {
      return messages.map((message) =>
        message.sender === id ? (
          <MessageSent
            key={message._id}
            avatar={currentUserData?.user.profilePicture as any}
            message={message.text}
          />
        ) : (
          <MessageReceiver
            key={message._id}
            avatar={userSelectedData?.user.profilePicture as any}
            message={message.text}
          />
        )
      );
    }

    return '';
  };
  return (
    <Container ref={scrollRef}>
      {isLoadingCurrentUser || isLoadingUserSelected ? (
        <LogoLoader />
      ) : (
        messagesElement()
      )}
    </Container>
  );
};

export default Messages;
