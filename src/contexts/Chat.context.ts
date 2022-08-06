import { createContext } from 'react';
import { Socket } from 'socket.io-client';
import { UserSocket } from '../interfaces/userSocket.interface';

export const ChatContext = createContext<{
  socket: Socket | undefined;
  onlineUsers: UserSocket[];
}>({
  socket: undefined,
  onlineUsers: [],
});
