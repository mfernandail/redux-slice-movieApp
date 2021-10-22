import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
import { API_KEY } from '../../api/MovieApiKey';

export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async() => {
  const movieSearch = 'Harry';
  const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieSearch}&type=movie`);  
  return response.data;
});

export const fetchSeriesAsync = createAsyncThunk('movies/fetchSeriesAsync', async() => {
  const serieSearch = 'Friends';
  const response = await movieApi.get(`?apikey=${API_KEY}&s=${serieSearch}&type=series`);  
  return response.data;
});

export const fetchShowDetailsAsync = createAsyncThunk('movies/fetchShowDetailsAsync', async(id) => {
  const response = await movieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);  
  return response.data;
});

const initialState = {
  movies: {},
  series: {},
  detailShow: {}
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
    [fetchMoviesAsync.rejected]: () => (console.log('Rejected!')),
    [fetchSeriesAsync.fulfilled]: (state, action) => {
      return {...state, series: action.payload}
    },
    [fetchShowDetailsAsync.fulfilled]: (state, action) => {
      // return detailShow = state.find(show => show.imdbID === action.payload)
      return {...state, detailShow: action.payload}
    }


  }
});

export const getAllMovies = state => state.showsReducer.movies;
export const getAllSeries = state => state.showsReducer.series;
export const getAllSelected = state => state.showsReducer.detailShow;

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
