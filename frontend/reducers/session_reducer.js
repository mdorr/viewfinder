import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "./../actions/session_actions";
import { merge } from "lodash";

const sessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser, errors: [] });
    case RECEIVE_ERRORS:
      return merge({}, state, { currentUser: null, errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
