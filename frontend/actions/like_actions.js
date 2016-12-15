import * as APIUtil from '../util/like_api_util';

export function like(likeData) {
  return (dispatch) => {
    return APIUtil.likePhoto(likeData);
  };
}

export function unlike(likeData) {
  return (dispatch) => {
    return APIUtil.unlikePhoto(likeData);
  };
}
