import * as React from "react";
import { UnsplashPhoto } from "../unplash/types";
import Photo from "./Photo";
import styles from "../styles/photos.module.css";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

const PhotoList: React.FC<{ photos?: UnsplashPhoto[] }> = ({ photos }) => {
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

export default PhotoList;
