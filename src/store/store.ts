import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/store/movieSlice";
import sortReducer from "../features/movies/store/sortSlice";
import movieListsReducer, { loadLists} from "../features/movieLists/store/movieListsSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    sort: sortReducer,
    movieLists: movieListsReducer,
  },
});
const savedLists = localStorage.getItem('movieLists');
if (savedLists) {
  store.dispatch(loadLists(JSON.parse(savedLists)));
}


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('movieLists', JSON.stringify(state.movieLists.lists));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;