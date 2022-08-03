import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../interfaces/post.interface';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/admin`;

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as State).reducer.user;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], any>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    getAllPosts: builder.query<Post[], any>({
      query: () => ({
        url: `/posts`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetAllUsersQuery } = adminApi;
