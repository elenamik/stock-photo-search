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

/***
 * Constructs API route based on search input (if any) and page number
 * If no search input given, the 'List photos' api is called.
 * If search input is given, the 'Search photos' api is called.
 */
const unsplashUrl = (pageNumber: number, searchVal?: string) => {
  let url: string;
  if (searchVal !== "") {
    url =
      UNSPLASH_SEARCH_URL +
      "?" +
      new URLSearchParams({
        query: searchVal!,
        page: pageNumber.toString(),
      });
  } else {
    url =
      UNSPLASH_GET_URL +
      "?" +
      new URLSearchParams({
        page: pageNumber.toString(),
      });
  }
  return url;
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
export const unsplashQueryHandler = async (
  pageNumber: number,
  searchVal?: string
) => {
  const url = unsplashUrl(pageNumber, searchVal);

  const response = await makeUnsplashRequest(url);
  // photos and search have different responses structures
  if (searchVal) {
    return response.results;
  } else return response;
};
