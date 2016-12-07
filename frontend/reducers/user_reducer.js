import { RECEIVE_USER_DETAILS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUserDetails = Object.freeze({
  user: null
});

const UserReducer = (state = _nullUserDetails, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      const userDetails = action.userDetails;
      return merge({}, _nullUserDetails, {userDetails});
    default:
      return state;
  }
};

export default UserReducer;
