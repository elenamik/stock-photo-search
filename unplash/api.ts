export const Api = "https://api.unsplash.com";

export const UNSPLASH_GET = Api + "/photos";

export const UNSPLASH_SEARCH = Api + "/search/photos";

export const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
if (!UNSPLASH_API_KEY) {
  alert("No API Key: Please add to .env");
}

export const unsplashSearchQuery = (query: string) => {
  return (
    UNSPLASH_SEARCH +
    "?" +
    new URLSearchParams({
      query,
    })
  );
};
