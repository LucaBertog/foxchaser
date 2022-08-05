/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

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
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsRender: () => {},
});
