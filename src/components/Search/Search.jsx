import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSearchMovieAsync, fetchSearchSerieAsync, removeSelectedSerie, removeSelectedMovie, getAllMovies } from '../../redux/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';

import './Search.css';
import { useSelector } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';

export const Search = () => {
  const {searchShow} = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getAllMovies);

  console.log(data)

  useEffect(() => {
    dispatch(fetchSearchMovieAsync(searchShow));
    dispatch(fetchSearchSerieAsync(searchShow));

    return () => {
      dispatch(removeSelectedMovie());
      dispatch(removeSelectedSerie());
    }
  }, [searchShow]);
  
  return (
    <>
    {
      Object.keys(data).length === 0
      ? <Spinner />
      : <ShowListening />
    }
    </>    
  )
}
