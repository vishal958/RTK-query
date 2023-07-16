import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'apiSlice',
  // keepUnusedDataFor: 5, // Caching the ntwork data for 5 sec
  // refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState()?.auth?.token; // Access store using getState()
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      // transformResponse: ()=> {}
      providesTags: ['Post'],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      headers: { 'x-custom-header': Math.random() },
      // invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: '/posts/' + id,
        method: 'DELETE',
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        // For optimistic updates
        const update = dispatch(
          apiSlice.util.updateQueryData('getPosts', undefined, (posts) => {
            delete posts[id];
          })
        );
        queryFulfilled.catch(() => {
          update.undo();
        });
      },
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = api;
