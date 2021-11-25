import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchShowDetailsAsync, getAllSelected, removeSelectedShow } from '../../stateContext/movies/movieSlice';
import { DetailsShow } from '../../components/DetailsShow/DetailsShow';
import { Spinner } from '../../components/Spinner/Spinner';
import { useTitle } from '../../hooks/useTitle';

export const Detail = () => {
  const dispatch = useDispatch();
  const {imdbid} = useParams();

  const data = useSelector(getAllSelected);

  const title = data ? data.Title : '';
  useTitle({title})

  useEffect(() => {
    dispatch(fetchShowDetailsAsync(imdbid));
    return () => {
      dispatch(removeSelectedShow())
    }
  }, [imdbid]);

  return (
    <>
    {
      Object.keys(data).length === 0
        ? <Spinner />
        : <DetailsShow data={data} />
    }    
    </>
  )
}
