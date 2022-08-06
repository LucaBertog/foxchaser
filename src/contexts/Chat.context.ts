import { createContext } from 'react';
import { Socket } from 'socket.io-client';

export const ChatContext = createContext<{
  socket: Socket | undefined;
}>({
  socket: undefined,
});
