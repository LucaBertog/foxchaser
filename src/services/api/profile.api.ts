import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from '../../interfaces/userProfile.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/profile`;

// interface Profile {
//   username: string;
//   email: string;
//   password: string;
// }

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // editProfile: builder.mutation({
    //   query: (profile: Profile) => ({
    //     url: '',
    //     method: 'PUT',
    //     body: Profile,
    //   }),
    // }),
    getProfile: builder.query<UserProfile, string>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
