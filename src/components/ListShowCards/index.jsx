import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeriesAsync, getAllMovies, getAllSeries } from '../../stateContext/movies/movieSlice';
import { ShowCard } from '../ShowCard/ShowCard';

const ListShowsCards = ({show}) => {
  const dispatch = useDispatch();
  let movieSerie;  
  
  show === 'movies' ? movieSerie = useSelector(getAllMovies) : movieSerie = useSelector(getAllSeries);
  
  useEffect(() => {
    show !== 'movies' && dispatch(fetchSeriesAsync())
  }, []);

  const idRef = useRef(null);

  return (
    <div className="movie-container">
    {
      movieSerie.Response === 'True'
        ? movieSerie.Search.map(movie => {
          if(idRef.current !== movie.imdbID) {
            idRef.current = movie.imdbID
            return (
              <ShowCard 
                key={movie.imdbID} 
                data={movie}
              />
            )
          }
          // return (
          //   <ShowCard 
          //     key={movie.imdbID, '-', index} 
          //     data={movie}
          //   />
          // )
        })
        : <div className="movies-error">
            <h3>{movieSerie.Error}</h3>
          </div>
    }
  </div>
  )
}

export default ListShowsCards;
