import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import UserDetailsReducer from './user_details_reducer';
import FeedReducer from './feed_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  userDetails: UserDetailsReducer,
  feed: FeedReducer
});

export default RootReducer;
