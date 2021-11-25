import { useEffect, useRef } from 'react';

export const useTitle = ({title}) => {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previusTitle = prevTitle.current;    
    document.title = `${title} | Movies & Series`;

    return () => document.title = previusTitle;
  }, [title])
}
