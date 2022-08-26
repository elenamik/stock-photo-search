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
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../hooks/useDebounce";

const Home: NextPage = () => {
  const [searchVal, setSearchVal] = React.useState<string>("");

  // debounce search input by 700ms to minimize network requests
  const debouncedSearchVal = useDebounce(searchVal, 700);

  const { isLoading, data } = useQuery<UnsplashPhoto[]>({
    queryFn: async () => {
      return unsplashQueryHandler(debouncedSearchVal);
    },
    queryKey: debouncedSearchVal,
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
      {isLoading ? <CircularProgress /> : <PhotoList photos={data}></PhotoList>}
    </div>
  );
};

export default Home;
