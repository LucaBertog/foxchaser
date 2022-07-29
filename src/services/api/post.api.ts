import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Post } from '../../interfaces/post.interface';
import { State } from '../../interfaces/state.interface';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/posts`;

export const postApi = createApi({
  reducerPath: 'postApi',
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
    createPost: builder.mutation({
      query: (post: FormData) => ({
        url: '',
        method: 'POST',
        body: post,
      }),
    }),

    getTimeline: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTimelineQuery, useCreatePostMutation } = postApi;
