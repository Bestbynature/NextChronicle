import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './feature/blogSlice';

const store = configureStore({
  reducer: {
    blogService: blogReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;


