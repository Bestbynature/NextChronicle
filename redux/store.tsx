import { configureStore } from '@reduxjs/toolkit';
import postServiceReducer from './post/postServiceSlice';

const store = configureStore({
  reducer: {
    clientService: postServiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;


