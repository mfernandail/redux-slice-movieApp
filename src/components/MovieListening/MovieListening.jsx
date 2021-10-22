import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movies/movieSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieListening.css';

export const MovieListening = () => {
  // const {Search: moviesList} = useSelector(state => state.moviesReducer.movies);
  const movies = useSelector(getAllMovies)

  // let renderMovies = '';

  // if(movies.Response === 'True') {
  //   renderMovies = movies.Search.map(movie => (
  //     <MovieCard 
  //       key={movie.imdbID} 
  //       data={movie}
  //     />
  //   ));
  // }else{
  //   renderMovies = (<div className="movies-error"><h3>{movies.error}</h3></div>)
  //   // return <h2>Error</h2>
  // }



  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {/* <div className="movie-container">{renderMovies}</div> */}
        <div className="movie-container">
          {
            movies.Response === 'True'
              ? movies.Search.map(movie => (
                  <MovieCard 
                    key={movie.imdbID} 
                    data={movie}
                  />
                ))
              : <div className="movies-error">
                  <h3>{movies.error}</h3>
                </div>
          }
        </div>
      </div>
      
    </div>
  )
}
