import * as APIUtil from '../util/search_api_util.js';

export const REQUEST_SEARCH = "REQUEST_SEARCH";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export function newSearch(term, category) {
  return (dispatch) => {
    dispatch(requestSearch());
    return APIUtil.fetchSearchResults(term, category).then(result => {
      dispatch(receiveSearchResults(result));
      return result;
    });
  };
}

export const requestSearch = (term, category) => ({
  type: REQUEST_SEARCH,
  term: term,
  category: category
});

export const receiveSearchResults = result => ({
  type: RECEIVE_SEARCH_RESULTS,
  result
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});
