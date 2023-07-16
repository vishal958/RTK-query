import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPost: (state, action) => {
      console.log('action', action);
      state.data = action.payload;
      return state;
    },
    getPost: (state) => {
      return state - 1;
    },
  },
});

export const { setPost, getPost } = postSlice.actions;
export default postSlice.reducer;
