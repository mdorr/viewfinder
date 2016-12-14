import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOG_OUT = "LOG_OUT";

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(() =>
      dispatch(receiveLogout())
    );
  };
}

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export function receiveErrors(errors) {
  return { type: RECEIVE_ERRORS, errors };
}

export function clearErrors() {
  return { type: CLEAR_ERRORS };
}

export function receiveLogout() {
  return { type: LOG_OUT };
}
