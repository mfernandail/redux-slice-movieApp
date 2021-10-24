import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { ListOfShow } from '../ListOfShows/ListOfShow';
import './ShowListening.css';

export const ShowListening = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const shows = [{title: 'movies', typeShow: movies}, {title: 'Series', typeShow: series}];

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        {
          shows.map(showL => {
            return (
              <div key={showL.title}>
                <h2 className="movie-list__title">{showL.title}</h2>
                <div className="movie-list__title-bottom"></div>
                <ListOfShow show={showL.typeShow} /> 
              </div>
            )
          })
        }
      </div>      
    </div>
  )
}
