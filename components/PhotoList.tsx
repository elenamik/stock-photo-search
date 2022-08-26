import * as React from "react";
import { UnsplashPhoto } from "../unplash/types";
import Photo from "./Photo";
import styles from "../styles/photos.module.css";

const PhotoList: React.FC<{ photos: UnsplashPhoto[] }> = ({ photos }) => {
  return (
    <div className={styles.photoList}>
      {photos?.map((photo: UnsplashPhoto) => (
        <Photo photo={photo}></Photo>
      ))}
    </div>
  );
};

export default PhotoList;
