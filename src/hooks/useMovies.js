import React, { useEffect } from 'react';
import movieApi from '../api/movieApi';
import { API_KEY } from '../api/MovieApiKey';

export const useMovies = () => {
  useEffect(() => {
    const movieSearch = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieSearch}&type=movie`)
        .catch(err => console.log(err));
      console.log(response);
    }
    fetchMovies()
  }, []);
  return (
    <div>
      
    </div>
  )
}
