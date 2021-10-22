import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    }
  },
});

export const getAllMovies = state => state.moviesReducer.movies;

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;