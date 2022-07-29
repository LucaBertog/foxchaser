import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../interfaces/user.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/users`;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<{ statusCode: string; user: User }, any>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
