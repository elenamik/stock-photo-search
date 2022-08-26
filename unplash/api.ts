/***
 * Load API Key
 */
const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
if (!UNSPLASH_API_KEY) {
  alert("No API Key: Please add to .env");
}

/***
 * API routes
 */
const UNSPLASH_API_URL = "https://api.unsplash.com";
const UNSPLASH_GET_URL = UNSPLASH_API_URL + "/photos";
const UNSPLASH_SEARCH_URL = UNSPLASH_API_URL + "/search/photos";

// constructing url for search
const unsplashSearchUrl = (query: string) => {
  return (
    UNSPLASH_SEARCH_URL +
    "?" +
    new URLSearchParams({
      query,
    })
  );
};

/***
 * Util function to make fetch requests to Unsplash given a URL
 * @param url
 */
const makeUnsplashRequest = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Version": "v1",
      Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
    },
  }).then((res) => res.json());
};

/***
 * Function to handle api calls to unsplash
 */
export const unsplashQueryHandler = async (searchVal: string) => {
  console.log("SEARCH VAL", typeof searchVal, searchVal);
  let url: string;
  if (searchVal !== "") {
    url = unsplashSearchUrl(searchVal);
  } else url = UNSPLASH_GET_URL;

  const response = await makeUnsplashRequest(url);
  // photos and search have different responses structures
  if (searchVal) {
    return response.results;
  } else return response;
};
