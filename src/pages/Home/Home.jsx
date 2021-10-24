import React, { useEffect } from 'react';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { useDispatch } from 'react-redux';
import { fetchMoviesAsync, fetchSeriesAsync } from '../../redux/movies/movieSlice';
import { Search } from '../../components/Search/Search';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchSeriesAsync())
  }, []);

  return (
    <>
      <Search />
      {/* <div className="home-bannerImg"></div> */}
      <ShowListening />
    </>
  )
}
