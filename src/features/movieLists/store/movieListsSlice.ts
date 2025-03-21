import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface MovieList {
  id: string;
  name: string;
  movies: number[];
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
    addMovieToList: (state, action: PayloadAction<{ listId: string; movieId: number }>) => {
      const list = state.lists.find((l) => l.id === action.payload.listId);
      if (list && !list.movies.includes(action.payload.movieId)) {
        list.movies.push(action.payload.movieId);
      }
    },
    removeMovieFromList: (state, action: PayloadAction<{ listId: string; movieId: number }>) => {
      const list = state.lists.find((l) => l.id === action.payload.listId);
      if (list) {
        list.movies = list.movies.filter((id) => id !== action.payload.movieId);
      }
    },
  },
});

export const { createList, deleteList, addMovieToList, removeMovieFromList , loadLists} = movieListsSlice.actions;
export default movieListsSlice.reducer;

