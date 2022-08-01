import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/users`;

export const userApi = createApi({
  reducerPath: 'userApi',
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
    getUserById: builder.query<{ statusCode: string; user: User }, any>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
    }),
    followUser: builder.mutation<
      { statusCode: string; message: string },
      string
    >({
      query: (id) => ({
        url: `${id}/follow`,
        method: 'PUT',
      }),
    }),
    unfollowUser: builder.mutation<
      { statusCode: string; message: string },
      string
    >({
      query: (id) => ({
        url: `${id}/unfollow`,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = userApi;
