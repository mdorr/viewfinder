import { RECEIVE_USER_DETAILS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUserDetails = Object.freeze({
  details: null
});

const UserDetailsReducer = (state = _nullUserDetails, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      const details = action.userDetails;
      return merge({}, _nullUserDetails, {details});
    default:
      return state;
  }
};

export default UserDetailsReducer;
