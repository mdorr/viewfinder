import { RECEIVE_USER_DETAILS, RECEIVE_USER_PHOTOS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUserDetails = Object.freeze({
  details: null,
  photos: [],
});

const UserDetailsReducer = (state = _nullUserDetails, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      return Object.assign({}, state, {
        details: action.userDetails
      });
    case RECEIVE_USER_PHOTOS:
      return Object.assign({}, state, {
        photos: action.userPhotos
      });
    default:
      return state;
  }
};

export default UserDetailsReducer;
