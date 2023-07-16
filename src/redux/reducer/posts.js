import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services/';

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.data = action.payload;
      return state;
    },
    getPost: (state) => {
      return state - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        console.log('action', action.payload);
        // pretend this field and this payload data exist for sake of example
        state.data = action.payload.slice(0, 3);
      }
    );
    builder.addMatcher(
      api.endpoints.addPost.matchFulfilled,
      (state, action) => {
        console.log('fullll');
        // pretend this field and this payload data exist for sake of example
        state.data = [...state.data, action.payload];
      }
    );
  },
});

export const { setPost, getPost } = postSlice.actions;
export default postSlice.reducer;
