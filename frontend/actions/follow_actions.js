import * as APIUtil from '../util/follow_api_util';
import { receiveCurrentUser } from "../actions/session_actions";

export function follow(follow) {
  return (dispatch) => {
    return APIUtil.followUser(follow)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
}

export function unfollow(unfollow) {
  return (dispatch) => {
    return APIUtil.unfollowUser(unfollow)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
}
