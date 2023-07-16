import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts';
import { api } from '../../services';

const rootReducer = combineReducers({
  posts: postsReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
