import * as APIUtil from '../util/feed_api_util';

export const REQUEST_FEED = "REQUEST_FEED";
export const RECEIVE_FEED = "RECEIVE_FEED";

export function fetchFeed(userId) {
  return (dispatch) => {
    dispatch(requestFeed());
    return APIUtil.fetchFeed(userId).then(feed => {
      dispatch(receiveFeed(feed));
      return feed;
    });
  };
}

export const requestFeed = () => ({
  type: REQUEST_FEED,
});

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});
