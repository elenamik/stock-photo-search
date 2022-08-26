import type { NextPage } from "next";
import * as React from "react";
import { useQuery } from "react-query";
import { unsplashQueryHandler } from "../unplash/api";
import { UnsplashPhoto } from "../unplash/types";
import PhotoList from "../components/PhotoList";
import {
  CircularProgress,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { usePagination } from "../hooks/usePagination";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";

const Home: NextPage = () => {
  // debounce changes in value to minimize network requests
  const { setSearchVal, debouncedSearchVal } = useDebouncedSearch("", 800);

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
      <TextField
        label="Search Unsplash"
        onChange={(event: { target: { value: string } }) => {
          setSearchVal(event.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <div>
            <IconButton
              onClick={() => {
                handlePageClick(-1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                handlePageClick(1);
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Page: {pageNumber}
            </Typography>
          </div>
          <PhotoList photos={data}></PhotoList>
        </div>
      )}
    </div>
  );
};

export default Home;
