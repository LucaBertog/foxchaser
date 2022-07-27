import { createContext } from 'react';

export const ProfileContext = createContext<{
  name: string;
  username: string;
  description: string;
  profilePicture: string;
  coverPicture: string;
  isCurrentUser: boolean;
}>({
  name: 'string',
  username: 'string',
  description: 'string',
  profilePicture: 'string',
  coverPicture: 'string',
  isCurrentUser: false,
});
