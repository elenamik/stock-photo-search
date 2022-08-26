import * as React from "react";
import { UnsplashPhoto } from "../unplash/types";
import Photo from "./Photo";

const PhotoList: React.FC<{ photos: UnsplashPhoto[] }> = ({ photos }) => {
  return (
    <div className="text-orange-700">
      <div className="text-3xl">hi</div>
      {photos?.map((photo: UnsplashPhoto) => (
        <p key={photo.id}>
          <Photo photo={photo}></Photo>
        </p>
      ))}
    </div>
  );
};

export default PhotoList;
