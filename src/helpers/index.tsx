import throttle from 'lodash/throttle';
import {useRef, useEffect, useCallback} from 'react';

export function useThrottle(cb: any, delay: any) {
  const options = { leading: false, trailing: true };
  const cbRef = useRef(cb);
  
  useEffect(() => {
    cbRef.current = cb;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  );
}