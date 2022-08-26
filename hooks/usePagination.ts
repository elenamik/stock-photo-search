import * as React from "react";

/***
 * Hook to track page number, and increment
 * Will reset to start if dep array changes
 */
export const usePagination = (startVal: number, dependencyArray: any[]) => {
  const [pageNumber, setPageNumber] = React.useState<number>(startVal);

  const handlePageClick = (change: number) => {
    if (change !== 1 && change !== -1) {
      alert("Improper use of page button, must be +! or -1");
    }
    if (pageNumber + change >= 1) {
      setPageNumber(pageNumber + change);
    }
  };

  // resets when dep array changes
  React.useEffect(() => {
    setPageNumber(startVal);
  }, [...dependencyArray]);

  return { pageNumber, handlePageClick };
};
