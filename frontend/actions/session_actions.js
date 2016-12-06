import * as APIUtil from './../util/session_api_util.js';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_USER";

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const signup = (user) => (
  (dispatch) => (
    APIUtil.signup(user).then((data) => {
        return dispatch(receiveCurrentUser(data));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const login = (user) => (
  (dispatch) => (
    APIUtil.login(user).then((data) => {
        return dispatch(receiveCurrentUser(data));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const logout = () => (
  (dispatch) => (
    APIUtil.logout().then((data) => {
        return dispatch(receiveCurrentUser(null));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  )
);
