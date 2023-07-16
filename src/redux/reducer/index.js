import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts';
import { apiSlice } from '../../services';

const rootReducer = combineReducers({
  posts: postsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
