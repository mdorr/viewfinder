import { REQUEST_FEED, RECEIVE_FEED } from './../actions/feed_actions';
import { REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS } from './../actions/user_actions';

const initialState = {
  feedLoading: false,
  userDetailsLoading: false,
};

export default (state = initialState, action) => {
  switch(action.type){

    // USER DETAILS
    case REQUEST_USER_DETAILS:
      return Object.assign({}, state, { userDetailsLoading: true });
    case RECEIVE_USER_DETAILS:
      return Object.assign({}, state, { userDetailsLoading: false });

    // FEED
    case REQUEST_FEED:
      return Object.assign({}, state, { feedLoading: true });
    case RECEIVE_FEED:
      return Object.assign({}, state, { feedLoading: false });

    default:
      return state;
  }
};
