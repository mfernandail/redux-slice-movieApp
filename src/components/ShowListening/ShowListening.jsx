import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAllMovies, getAllSeries } from '../../stateContext/movies/movieSlice';
// import { ListOfShow } from '../ListOfMovies/ListOfMovies';
import ListShowsCards from '../ListShowCards';
import { Helmet } from 'react-helmet';
import './ShowListening.css';
import { LazyTranding } from '../ListOfSeries';

export const ShowListening = () => {
  // const movies = useSelector(getAllMovies);
  // const series = useSelector(getAllSeries);
  const paramsURL = useParams();
  const showUrl = paramsURL.searchShow ? paramsURL.searchShow : 'Home';
  // const shows = [{title: `Movies ${showUrl}`, typeShow: movies}, {title: `Series ${showUrl}`, typeShow: series}];

  return (
    <>
      <Helmet>
        <title>{showUrl} | Movies & Series</title>
        <meta name="description" content="Web application to see information of movies and series" />
      </Helmet>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2 className="movie-list__title">Movies</h2>
          <ListShowsCards show='movies' /> 
        </div>   
      </div>

      <div className="movie-wrapper">
        <div className="movie-list">
          <h2 className="movie-list__title">Series</h2>
          <LazyTranding /> 
        </div>   
      </div>

      
    </>

    // ---------------
    /**
    <>
      <Helmet>
        <title>{showUrl} | Movies & Series</title>
        <meta name="description" content="Web application to see information of movies and series" />
      </Helmet>
      <div className="movie-wrapper">
        <div className="movie-list">
          {
            shows.map(showL => {
              return (
                <div key={showL.title}>
                  <h2 className="movie-list__title">{showL.title}</h2>
                  <ListOfShow show={showL.typeShow} /> 
                </div>
              )
            })
          }
        </div>      
      </div>
    </>
    */
  )
}
