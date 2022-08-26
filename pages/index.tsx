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

const Home: NextPage = () => {
  const [searchVal, setSearchVal] = React.useState<string | undefined>();

  const { isLoading, data } = useQuery<UnsplashPhoto[]>({
    queryFn: async () => {
      return unsplashQueryHandler(searchVal);
    },
    queryKey: searchVal,
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
