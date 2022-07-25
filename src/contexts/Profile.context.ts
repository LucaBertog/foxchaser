import { createContext } from 'react';

export const ProfileContext = createContext<{
  username: string;
  isCurrentUser: boolean;
}>({
  username: '',
  isCurrentUser: false,
});
