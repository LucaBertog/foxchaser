import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../interfaces/post.interface';
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
    deletePost: builder.mutation<any, string>({
      query: (id) => ({
        url: id,
        method: 'DELETE',
      }),
    }),
    createPost: builder.mutation({
      query: (post: FormData) => ({
        url: '',
        method: 'POST',
        body: post,
      }),
    }),
    getTimeline: builder.query<{ statusCode: string; posts: Post[] }, any>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
    getPostsByUserId: builder.query<
      { statusCode: string; posts: Post[] },
      string
    >({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useDeletePostMutation,
  useGetTimelineQuery,
  useCreatePostMutation,
  useGetPostsByUserIdQuery,
} = postApi;
