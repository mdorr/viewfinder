import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import UserDetailsReducer from './user_details_reducer';
import FeedReducer from './feed_reducer';
import LoadingReducer from './loading_reducer';

import { LOG_OUT } from './../actions/session_actions';


const RootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined; // Reset all state on logout
  }
  return CombinedReducers(state, action);
};

const CombinedReducers = combineReducers({
  session: SessionReducer,
  userDetails: UserDetailsReducer,
  loading: LoadingReducer,
  feed: FeedReducer
});

export default RootReducer;
