import { RECEIVE_USER_DETAILS } from '../actions/user_actions';

const _nullUserDetails = Object.freeze({
  details: null
});

const UserDetailsReducer = (state = _nullUserDetails, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      return Object.assign({}, state, {
        details: action.userDetails
      });
    default:
      return state;
  }
};

export default UserDetailsReducer;
