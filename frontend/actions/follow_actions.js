import * as APIUtil from '../util/follow_api_util';
import { receiveCurrentUser } from "../actions/session_actions";

export function follow(followData) {
  return (dispatch) => {
    return APIUtil.followUser(followData)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
}

export function unfollow(unfollowData) {
  return (dispatch) => {
    return APIUtil.unfollowUser(unfollowData)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
}
