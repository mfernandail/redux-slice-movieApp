import React from 'react';
import { useParams } from 'react-router';
import ListShowsCards from '../ListShowCards';
import { Helmet } from 'react-helmet';
import { LazyTranding } from '../ListOfSeries';
import './ShowListening.css';

export const ShowListening = () => {
  const paramsURL = useParams();
  const showUrl = paramsURL.searchShow ? paramsURL.searchShow : 'Home';
 
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

          <h2 className="movie-list__title">Series</h2>
          <LazyTranding /> 
          
        </div>   
      </div>

      {/* <div className="movie-wrapper">
        <div className="movie-list">
          <h2 className="movie-list__title">Series</h2>
          <LazyTranding /> 
        </div>   
      </div> */}
      
    </>
  )
}
