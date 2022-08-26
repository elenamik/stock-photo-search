import * as React from "react";
import { useDebounce } from "../hooks";

/***
 * @param debounceInterval in ms
 */
export const useDebouncedSearch = (
  initialValue: string,
  debounceInterval: number
) => {
  const [searchVal, setSearchVal] = React.useState<string>(initialValue);

  const debouncedSearchVal = useDebounce(searchVal, debounceInterval);

  return {
    setSearchVal,
    debouncedSearchVal,
  };
};
