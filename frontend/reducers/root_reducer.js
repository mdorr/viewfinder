import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import UserDetailsReducer from './user_details_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  userDetails: UserDetailsReducer
});

export default RootReducer;
