import * as APIUtil from '../util/follow_api_util.js';

export function follow(followData) {
  return (dispatch) => {
    return APIUtil.followUser(followData);
  };
}

export function unfollow(unfollowData) {
  return (dispatch) => {
    return APIUtil.unfollowUser(unfollowData);
  }
}
