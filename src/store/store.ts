import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/store/movieSlice";
import sortReducer from "../features/movies/store/sortSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;