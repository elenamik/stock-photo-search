import * as React from "react";
import { UnsplashPhoto } from "../unplash/types";
import styles from "../styles/photos.module.css";

export const Photo: React.FC<{ photo: UnsplashPhoto }> = ({ photo }) => {
  return <img className={styles.photo} src={photo.urls.regular} />;
};
