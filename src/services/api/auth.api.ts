import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://foxchaser-api.onrender.com/auth';

interface User {
  username: string;
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user: User) => ({
        url: 'register',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (userLogin: Pick<User, 'email' | 'password'>) => ({
        url: 'login',
        method: 'POST',
        body: userLogin,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
