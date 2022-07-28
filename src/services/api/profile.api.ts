import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { State } from '../../interfaces/state.interface';
import { UserProfile } from '../../interfaces/userProfile.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/profile`;

export const profileApi = createApi({
  reducerPath: 'profileApi',
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
    editProfile: builder.mutation({
      query: (profile: FormData) => ({
        url: '',
        method: 'PUT',
        body: profile,
      }),
    }),
    getProfile: builder.query<UserProfile, string>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery, useEditProfileMutation } = profileApi;
