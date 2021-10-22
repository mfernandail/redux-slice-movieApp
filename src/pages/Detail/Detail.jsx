import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchShowDetailsAsync, getAllSelected } from '../../redux/movies/movieSlice';

export const Detail = () => {
  const dispatch = useDispatch();
  const {imdbid} = useParams();

  const data = useSelector(getAllSelected);

  console.log(data)

  // useEffect(() => {
  //   dispatch(fetchShowDetailsAsync(imdbID));
  // }, [imdbID]);

  return (
    <div>
      <h1>Movie detail</h1>
    </div>
  )
}
