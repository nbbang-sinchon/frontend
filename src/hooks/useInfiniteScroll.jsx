import { useEffect, useRef } from 'react';

function useInfiniteScroll(observerCallback) {
  const detectorRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(detectorRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return detectorRef;
}

export default useInfiniteScroll;
