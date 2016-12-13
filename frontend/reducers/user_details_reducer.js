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
      const details = action.userDetails;
      return merge({}, state, {details});
      // RECEIVE FOLLOW // RECEIVE UNFOLLOWS
    case RECEIVE_USER_PHOTOS:
      const photos = action.userPhotos;
      return merge({}, state, {photos});
    default:
      return state;
  }
};

export default UserDetailsReducer;
