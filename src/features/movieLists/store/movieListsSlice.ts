
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../movies/types/movieTypes";

interface MovieList {
  id: string;
  name: string;
  movies: Movie[];
}

interface MovieListsState {
  lists: MovieList[];
}

const initialState: MovieListsState = {
  lists: [],
};

const movieListsSlice = createSlice({
  name: "movieLists",
  initialState,
  reducers: {
    createList: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.lists.push({ ...action.payload, movies: [] });
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
    loadLists: (state, action: PayloadAction<MovieList[]>) => {
      state.lists = action.payload;
    },
    addMovieToList: (state, action: PayloadAction<{ listId: string; movie: Movie }>) => {
      const list = state.lists.find((l) => l.id === action.payload.listId);
      if (list && !list.movies.find((m) => m.id === action.payload.movie.id)) {
        list.movies.push(action.payload.movie);
      }
    },
    removeMovieFromList: (state, action: PayloadAction<{ listId: string; movieId: number }>) => {
      const list = state.lists.find((l) => l.id === action.payload.listId);
      if (list) {
        list.movies = list.movies.filter((m) => m.id !== action.payload.movieId);
      }
    },
  },
});

export const {
  createList,
  deleteList,
  addMovieToList,
  removeMovieFromList,
  loadLists
} = movieListsSlice.actions;

export default movieListsSlice.reducer;
