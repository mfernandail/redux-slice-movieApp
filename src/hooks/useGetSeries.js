import React from 'react';

export const useGetSeries = () => {
  
  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchSeriesAsync())
  }, []);
  
  return (
    <div>
      
    </div>
  )
}
