import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../../features/movies/store/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;