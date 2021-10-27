import React from 'react';
import './ListIcons.css';

export const ListIcons = ({icon, data, description}) => {
  return (
    <span>
      <img className="movie-section__icon" src={icon} />
      <span className="movie-section__desc">{description}:</span>
      <span className="movie-section__data">{data}</span>
    </span>
  )
}
