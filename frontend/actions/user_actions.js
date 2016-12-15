import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";

export function fetchUserDetails(id) {
	return (dispatch) => {
		dispatch(requestUserDetails());
		return APIUtil.fetchUserDetails(id).then(userDetails => {
			dispatch(receiveUserDetails(userDetails));
			return userDetails;
		});
	};
}

export function updateUser(user) {
	return (dispatch) => {
		return APIUtil.updateUser(user).then(user => dispatch(receiveUserDetails(user)));
	};
}

export const requestUserDetails = () => ({
  type: REQUEST_USER_DETAILS
});

export const receiveUserDetails = userDetails => ({
  type: RECEIVE_USER_DETAILS,
  userDetails
});
