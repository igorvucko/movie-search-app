import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "../api/getMovies";
import type { Movie } from "../types/movieTypes";

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};


export const searchMovies = createAsyncThunk("movies/searchMovies", async (query: string) => {
  if (!query) return [];
  return await fetchMovies(query);
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching movies";
      });
  },
});

export default movieSlice.reducer;