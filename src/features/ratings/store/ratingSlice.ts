import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatingsState {
  [movieId: number]: number;
}

const loadFromStorage = (): RatingsState => {
  const stored = localStorage.getItem("movieRatings");
  return stored ? JSON.parse(stored) : {};
};

const saveToStorage = (ratings: RatingsState) => {
  localStorage.setItem("movieRatings", JSON.stringify(ratings));
};

const initialState: RatingsState = loadFromStorage();

const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    rateMovie: (state, action: PayloadAction<{ movieId: number; rating: number }>) => {
      state[action.payload.movieId] = action.payload.rating;
      saveToStorage(state);
    },
  },
});

export const { rateMovie } = ratingsSlice.actions;
export default ratingsSlice.reducer;