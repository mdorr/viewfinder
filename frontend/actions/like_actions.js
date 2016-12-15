import * as APIUtil from '../util/like_api_util';

export const REQUEST_LIKE_STATE = "REQUEST_LIKE_STATE";
export const RECEIVE_LIKE_STATE = "RECEIVE_LIKE_STATE";
export const REQUEST_LIKE = "REQUEST_LIKE";
export const REQUEST_UNLIKE = "REQUEST_UNLIKE";

export function getState(likeData) {
  return (dispatch) => {
    dispatch(requestState(likeData));
    return APIUtil.requestState(likeData).then(
      likeData => {
        dispatch(receiveState(likeData));
      }
    );
  };
}

export function like(likeData) {
  return (dispatch) => {
    dispatch(requestLike(likeData));
    return APIUtil.likePhoto(likeData).then(
      likeData => {
        dispatch(receiveState(likeData));
      }
    );
  };
}

export function unlike(likeData) {
  return (dispatch) => {
    dispatch(requestUnlike(likeData));
    return APIUtil.unlikePhoto(likeData).then(
      likeData => {
        dispatch(receiveState(likeData));
      }
    );
  };
}

export const requestState = (likeData) => ({
  type: REQUEST_LIKE_STATE,
  likeData
});

export const receiveState = (likeData) => ({
  type: RECEIVE_LIKE_STATE,
  likeData
});

export const requestLike = (likeData) => ({
  type: REQUEST_LIKE,
  likeData
});

export const requestUnlike = (likeData) => ({
  type: REQUEST_UNLIKE,
  likeData
});
