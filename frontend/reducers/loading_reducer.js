import { REQUEST_FEED, RECEIVE_FEED } from './../actions/feed_actions';

const initialState = {
  indexLoading: false,
};

export default (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_FEED:
      return initialState;
    case REQUEST_FEED:
      return Object.assign({}, state, { indexLoading: true });
    default:
      return state;
  }
};
