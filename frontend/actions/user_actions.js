import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

export function userDetails(userId) {
  return (dispatch) => {
    return APIUtil.userDetails(userId)
      .then(userDetails =>
        dispatch(receiveUserDetails(userDetails))
      );
  };
}

export const receiveUserDetails = userDetails => ({
  type: RECEIVE_USER_DETAILS,
  userDetails
});
