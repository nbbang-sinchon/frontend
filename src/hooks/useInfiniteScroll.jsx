import { useEffect, useRef } from 'react';

function useInfiniteScroll(observerCallback, depArray = []) {
  const detectorRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(detectorRef.current);

    return () => {
      observer.disconnect();
    };
  }, depArray);

  return detectorRef;
}

export default useInfiniteScroll;
