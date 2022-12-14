import { createContext } from 'react';

export const ProfileContext = createContext<{
  id: string;
  name: string;
  username: string;
  description: string;
  profilePicture: string;
  coverPicture: string;
}>({
  id: '',
  name: '',
  username: '',
  description: '',
  profilePicture: '',
  coverPicture: '',
});
