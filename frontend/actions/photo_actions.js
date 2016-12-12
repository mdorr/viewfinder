import * as APIUtil from '../util/photo_api_util';

export function upload(photoData) {
  return (dispatch) => {
    return APIUtil.uploadPhoto(photoData);
  };
}
