import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/search`;

export const searchApi = createApi({
  reducerPath: 'searchApi',
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
    doSearch: builder.query<{ usersResult: User[] }, string>({
      query: (query) => ({
        url: query,
        method: 'GET',
      }),
    }),
  }),
});

export const { useDoSearchQuery } = searchApi;
