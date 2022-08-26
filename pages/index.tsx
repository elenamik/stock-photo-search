import type { NextPage } from "next";
import * as React from "react";
import { useQuery } from "react-query";
import { UNSPLASH_API_KEY, UNSPLASH_GET } from "../unplash/api";
import { UnsplashPhoto } from "../unplash/types";
import PhotoList from "../components/PhotoList";
import { CircularProgress, Card, CardContent, Typography } from "@mui/material";

const Home: NextPage = () => {
  const fetchImages = async () => {
    return fetch(UNSPLASH_GET, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    }).then((res) => res.json());
  };

  const { isLoading, data } = useQuery<UnsplashPhoto[]>({
    queryFn: fetchImages,
  });

  if (isLoading) {
    return <CircularProgress />;
  } else if (!data) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Failed to Load
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="">
      <PhotoList photos={data}></PhotoList>
    </div>
  );
};

export default Home;
