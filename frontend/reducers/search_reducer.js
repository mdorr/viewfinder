import { CLEAR_SEARCH_RESULTS, RECEIVE_PHOTO_SEARCH_RESULTS, RECEIVE_USER_SEARCH_RESULTS } from '../actions/search_actions';

const _nullSearch = Object.freeze({
  photos: [],
  users: []
});

const SearchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_SEARCH_RESULTS:
      return Object.assign({}, state, {
          photos: action.result,
          users: []
      });
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, {
        photos: [],
        users: action.result
      });
    case CLEAR_SEARCH_RESULTS:
      return Object.assign({}, state, {
        photos: [],
        users: []
      });
    default:
      return state;
  }
};

export default SearchReducer;
