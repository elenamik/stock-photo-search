import * as React from "react";
import { UnsplashPhoto } from "../unplash/types";
import styles from "../styles/photos.module.css";
import { Card, CardContent, Typography } from "@mui/material";
import { Photo } from "../components";

export const PhotoList: React.FC<{ photos?: UnsplashPhoto[] }> = ({
  photos,
}) => {
  if (!photos) {
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
    <div className={styles.photoList}>
      {photos?.map((photo: UnsplashPhoto) => (
        <Photo photo={photo}></Photo>
      ))}
    </div>
  );
};
