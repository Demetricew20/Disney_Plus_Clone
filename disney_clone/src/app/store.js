import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice'
import movieReducer from '../features/movie/MovieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
