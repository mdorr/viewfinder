import * as APIUtil from '../util/search_api_util.js';

export const REQUEST_PHOTO_SEARCH = "REQUEST_PHOTO_SEARCH";
export const RECEIVE_PHOTO_SEARCH_RESULTS = "RECEIVE_PHOTO_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const REQUEST_USER_SEARCH = "REQUEST_USER_SEARCH";
export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";

export function newSearch(term, category) {
  if (category === "Photos") {
    return (dispatch) => {
      dispatch(requestPhotos());
      return APIUtil.searchPhotos(term).then(result => {
        dispatch(receivePhotos(result));
        return result;
      });
    };
  } else if (category === "Users") {
    return (dispatch) => {
      dispatch(requestUsers());
      return APIUtil.searchUsers(term).then(result => {
        dispatch(receiveUsers(result));
        return result;
      });
    };
  }
}

export const requestPhotos = term => ({
  type: REQUEST_PHOTO_SEARCH,
  term
});

export const receivePhotos = result => ({
  type: RECEIVE_PHOTO_SEARCH_RESULTS,
  result
});

export const requestUsers = term => ({
  type: REQUEST_USER_SEARCH,
  term
});

export const receiveUsers = result => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  result
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});
