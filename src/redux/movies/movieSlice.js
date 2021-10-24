import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
import { API_KEY } from '../../api/MovieApiKey';

export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async() => {
  const movieSearch = 'Avengers';
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

export const fetchSearchMovieAsync = createAsyncThunk('movies/fetchSearchShowAsync', async(movie) => {
  const response = await movieApi.get(`?apikey=${API_KEY}&s=${movie}&type=movie`);
  return response.data;
});

export const fetchSearchSerieAsync = createAsyncThunk('movies/fetchSearchSeriAsync', async(serie) => {
  const response = await movieApi.get(`?apikey=${API_KEY}&s=${serie}&type=series`);
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
    removeSelectedShow: (state) => {
      state.detailShow = {}
    },
    removeSelectedMovie: (state) => {
      state.movies = {}
    },
    removeSelectedSerie: (state) => {
      state.series = {}
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
    },
    [fetchSearchMovieAsync.fulfilled]: (state, action) => {
      return {...state, movies: action.payload}
    },
    [fetchSearchSerieAsync.fulfilled]: (state, action) => {
      return {...state, series: action.payload}
    }
  }
});

export const getAllMovies = state => state.showsReducer.movies;
export const getAllSeries = state => state.showsReducer.series;
export const getAllSelected = state => state.showsReducer.detailShow;

export const {removeSelectedShow, removeSelectedMovie, removeSelectedSerie} = movieSlice.actions;
export default movieSlice.reducer;
