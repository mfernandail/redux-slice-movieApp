import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Spinner } from '../Spinner';

const ListShowsCards = React.lazy(() => import('../ListShowCards'));

export const LazyTranding = () => {
  const {nearScreen, elementRef} = useNearScreen();
  console.log(nearScreen)
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        { nearScreen ? <ListShowsCards show='series' /> : <Spinner /> }
      </Suspense>
    </div>
  )
}
