import React, { useEffect } from 'react';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { useDispatch } from 'react-redux';
import { fetchMoviesAsync, fetchSeriesAsync } from '../../redux/movies/movieSlice';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchSeriesAsync())
  }, []);

  return (
    <>
      <div className="home-bannerImg"></div>
      <ShowListening />
    </>
  )
}
