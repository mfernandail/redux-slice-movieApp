import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeriesAsync, getAllMovies, getAllSeries } from '../../stateContext/movies/movieSlice';
import { ShowCard } from '../ShowCard/ShowCard';

const ListShowsCards = ({show}) => {
  const dispatch = useDispatch();
  let movieSerie;  
  
  show === 'movies' ? movieSerie = useSelector(getAllMovies) : movieSerie = useSelector(getAllSeries);
  
  useEffect(() => {
    show !== 'movies' && dispatch(fetchSeriesAsync())
  }, [])

  return (
    <div className="movie-container">
    {
      movieSerie.Response === 'True'
        ? movieSerie.Search.map((movie, index) => (
            <ShowCard 
              key={movie.imdbID, '-', index} 
              data={movie}
            />
          ))
        : <div className="movies-error">
            <h3>{movieSerie.Error}</h3>
          </div>
    }
  </div>
  )
}

export default ListShowsCards;
