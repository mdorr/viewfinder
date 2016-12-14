import { RECEIVE_CURRENT_USER, LOG_OUT, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case LOG_OUT:
      return merge({}, _nullUser, {});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      let nextState = merge({}, state);
      nextState.errors = [];
      return nextState;
    default:
      return state;

  }
};

export default SessionReducer;
