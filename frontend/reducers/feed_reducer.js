import { RECEIVE_FEED } from '../actions/feed_actions';
import merge from 'lodash/merge';

const _nullFeed = Object.freeze({
  photos: []
});

const FeedReducer = (state = _nullFeed, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEED:
      const photos = action.feed;
      return merge ({}, state, {photos});
    default:
      return state;
  }
};

export default FeedReducer;
