import type { NextPage } from "next";
import * as React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { UnsplashPhoto, unsplashQueryHandler } from "../unplash";
import { PageButtons, PhotoList, Search } from "../components";
import { usePagination, useDebouncedSearch } from "../hooks";

const Home: NextPage = () => {
  // debounce changes in value to minimize network requests
  const { debouncedSearchVal, setSearchVal } = useDebouncedSearch("", 800);

  const { pageNumber, handlePageClick } = usePagination(1, [
    debouncedSearchVal,
  ]);

  const { isLoading, data } = useQuery<UnsplashPhoto[]>({
    queryFn: async () => {
      return unsplashQueryHandler(pageNumber, debouncedSearchVal);
    },
    queryKey: [debouncedSearchVal, pageNumber],
    onError: (error: any) => {
      alert(error);
    },
  });

  return (
    <div>
      <Search label="Search Unsplash" handleChange={setSearchVal} />
      <br />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <PageButtons
            pageNumber={pageNumber}
            handleLeft={() => {
              handlePageClick(-1);
            }}
            handleRight={() => {
              handlePageClick(1);
            }}
          />
          <PhotoList photos={data}></PhotoList>
        </div>
      )}
    </div>
  );
};

export default Home;
