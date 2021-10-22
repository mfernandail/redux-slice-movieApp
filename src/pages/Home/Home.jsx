import React, { useEffect } from 'react';
import { MovieListening } from '../../components/MovieListening/MovieListening';;
import { useDispatch } from 'react-redux';
import { fetchMoviesAsync } from '../../redux/movies/movieSlice';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync())
  }, []);
  
  return (
    <>
      <div className="home-bannerImg"></div>
      <MovieListening />
    </>
  )
}
