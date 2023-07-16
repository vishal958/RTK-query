import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { apiSlice } from '../services';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
