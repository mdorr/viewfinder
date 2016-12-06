import * as APIUtil from './../util/session_api_util.js';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_USER";

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  }
}

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  }
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)));
  }
}

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
