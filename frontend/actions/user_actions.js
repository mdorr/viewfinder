import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";
export const REQUEST_USER_PHOTOS = "REQUEST_USER_PHOTOS";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";

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

export function fetchUserPhotos(userId) {
  return (dispatch) => {
		dispatch(requestUserPhotos());
    return APIUtil.fetchUserPhotos(userId).then(userPhotos => {
			dispatch(receiveUserPhotos(userPhotos));
			return userPhotos;
		});
  };
}

export const requestUserPhotos = () => ({
  type: REQUEST_USER_PHOTOS
});

export const receiveUserPhotos = userPhotos => ({
	type: RECEIVE_USER_PHOTOS,
	userPhotos
});

export const requestUserDetails = () => ({
  type: REQUEST_USER_DETAILS
});

export const receiveUserDetails = userDetails => ({
  type: RECEIVE_USER_DETAILS,
  userDetails
});
