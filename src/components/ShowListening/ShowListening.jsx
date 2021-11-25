import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useTitle } from '../../hooks/useSEO';
import { getAllMovies, getAllSeries } from '../../stateContext/movies/movieSlice';
import { ListOfShow } from '../ListOfShows/ListOfShow';
import './ShowListening.css';

export const ShowListening = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const paramsURL = useParams();
  const showUrl = paramsURL.searchShow ? paramsURL.searchShow : 'Home';
  const description = `${showUrl} details`;

  console.log(description)
  
  useTitle({title: showUrl, description});

  const shows = [{title: `Movies ${showUrl}`, typeShow: movies}, {title: `Series ${showUrl}`, typeShow: series}];

  return (
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
  )
}
