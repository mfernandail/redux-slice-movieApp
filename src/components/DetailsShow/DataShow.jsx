import React from 'react';
import './DataShow.css';

export const DataShow = ({desc, info}) => {
  return (
    <div>
      <span>{desc}:</span>
      <span>{info}</span>
    </div>
  )
}
