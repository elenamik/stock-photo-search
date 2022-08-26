import * as React from "react";

/***
 * Delays update in state until we reach a timeout
 * delay in MS
 */
export const useDebounce = (value: any, delay: number) => {
  const [debouncedVal, setDebouncedVal] = React.useState(value);

  React.useEffect(() => {
    // if we reach end of the delay with no change, then we set the debounced value
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    // will cancel timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedVal;
};
