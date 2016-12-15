import { RECEIVE_FEED } from '../actions/feed_actions';

const _nullFeed = Object.freeze({
  photos: []
});

const FeedReducer = (state = _nullFeed, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEED:
      return Object.assign({}, state, {
        photos: action.feed
      });
    default:
      return state;
  }
};

export default FeedReducer;
