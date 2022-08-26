export interface UnsplashPhoto {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
  };
  width: number;
}
