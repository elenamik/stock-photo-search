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

import { useDebounce } from "../hooks/useDebounce";

const Home: NextPage = () => {
  const [searchVal, setSearchVal] = React.useState<string>("");

  // debounce search input by 700ms to minimize network requests
  const debouncedSearchVal = useDebounce(searchVal, 700);

  // if user decides to search, reset page numbers
  React.useEffect(() => {
    setPageNumber(1);
  }, [debouncedSearchVal]);

  const [pageNumber, setPageNumber] = React.useState<number>(1);
  console.log(pageNumber);

  const handlePageClick = (change: number) => {
    // either +1 or -1

    if (pageNumber + change >= 1) {
      setPageNumber(pageNumber + change);
    }
  };

  const { isLoading, data } = useQuery<UnsplashPhoto[]>({
    queryFn: async () => {
      return unsplashQueryHandler(pageNumber, debouncedSearchVal);
    },
    queryKey: [debouncedSearchVal, pageNumber],
  });

  return (
    <div className="">
      <TextField
        label="Search unsplash"
        onChange={(event: { target: { value: string } }) => {
          console.log();
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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
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
