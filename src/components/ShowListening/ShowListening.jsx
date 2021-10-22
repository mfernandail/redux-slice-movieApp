import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { ListOfShow } from '../ListOfShows/ListOfShow';
import './ShowListening.css';

export const ShowListening = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">

        <h2>Movies</h2>
        <ListOfShow show={movies} /> 

        <h2>Series</h2>
        <ListOfShow show={series} />

      </div>
      
    </div>
  )
}
