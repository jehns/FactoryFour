import { useEffect, useRef } from 'react';

/*
Dynamic delay for future features.
Great article explaining how to use setInterval with hooks by Dan Abramov:
https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/
const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
