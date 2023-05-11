
import { useEffect, useState } from 'react';

export function useWindowResize(callback) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWdith,
        height: window.innerHeight,
      });
      callback();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);

  return windowSize;
}