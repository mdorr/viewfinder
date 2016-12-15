import * as APIUtil from '../util/photo_api_util';

export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const REQUEST_PHOTO = "REQUEST_PHOTO";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export function upload(photoData) {
  return (dispatch) => {
    dispatch(uploadPhoto(photoData));
    return APIUtil.uploadPhoto(photoData).then(
      photoData => {
        dispatch(receivePhoto(photoData));
      }
    );
  };
}

export function getPhoto(photo_id) {
  return (dispatch) => {
    dispatch(requestPhoto(photo_id));
    return APIUtil.getPhoto(photo_id).then(
      photoData => {
        dispatch(receivePhoto(photoData));
      }
    );
  };
}

export const uploadPhoto = (photoData) => ({
  type: UPLOAD_PHOTO,
  photoData
});

export const requestPhoto = (photo_id) => ({
  type: REQUEST_PHOTO,
  photo_id
});

export const receivePhoto = (photoData) => ({
  type: RECEIVE_PHOTO,
  photoData
});
