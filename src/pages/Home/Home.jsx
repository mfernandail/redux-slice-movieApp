import React, { useEffect } from 'react';
import { MovieListening } from '../../components/MovieListening/MovieListening';
import movieApi from '../../api/movieApi';
import { API_KEY } from '../../api/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/movies/movieSlice';

export const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const movieSearch = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieSearch}&type=movie`)
        .catch(err => console.log(err));

        // console.log(response.data.Search)
        dispatch(addMovies(response.data));
    }
    fetchMovies()
  }, []);
  return (
    <>
      <div className="home-bannerImg"></div>
      <MovieListening />
    </>
  )
}
