import { createContext } from 'react';

export const UserContext = createContext<{
  id: string;
  name: string;
  username: string;
  description: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  emblems: string[];
}>({
  id: '',
  name: '',
  username: '',
  description: '',
  profilePicture: '',
  coverPicture: '',
  followers: [],
  followings: [],
  emblems: [],
});
