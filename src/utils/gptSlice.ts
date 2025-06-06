import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    loading: false, // <-- add loading here
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.loading = false; // stop loading after results added
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // true or false
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMoviesResult,
  clearGptResults,
  setLoading,
} = gptSlice.actions;

export default gptSlice.reducer;
