import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: "year" | "genre" | "";
  selectedYear: string;
  selectedGenre: string;
}

const initialState: SortState = {
  sortBy: "",
  selectedYear: "",
  selectedGenre: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<"year" | "genre" | "">) => {
      state.sortBy = action.payload;
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload;
    },
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setSortBy, setSelectedYear, setSelectedGenre } = sortSlice.actions;
export default sortSlice.reducer;