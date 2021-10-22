import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
import { API_KEY } from '../../api/MovieApiKey';

export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async() => {
  const movieSearch = 'Harry';
  const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieSearch}&type=movie`);  
  return response.data;
});

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
  extraReducers: {
    [fetchMoviesAsync.pending]: () => (console.log('Pending')),
    [fetchMoviesAsync.fulfilled]: (state, action) => {
      console.log('Seccess')
      return {...state, movies: action.payload}
    },
    [fetchMoviesAsync.rejected]: () => (console.log('Rejected!'))


  }
});

export const getAllMovies = state => state.moviesReducer.movies;

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
