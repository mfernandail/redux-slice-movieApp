import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMoviesAsync} from '../../stateContext/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { InputSearch } from '../inputSearch/InputSearch';
import './Search.css';

export const Search = () => {
  const {searchShow} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow));
  }, [searchShow]);
  
  return (
    <>
      <InputSearch />
      <ShowListening />
    </>    
  )
}
