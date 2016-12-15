import { REQUEST_LIKE_STATE, RECEIVE_LIKE_STATE, REQUEST_LIKE, REQUEST_UNLIKE } from './../actions/like_actions';
import merge from 'lodash/merge';

const LikeReducer = (state = { }, action) => {
  const likeData = action.likeData;
  switch(action.type) {
    case REQUEST_LIKE_STATE:
    case REQUEST_LIKE:
    case REQUEST_UNLIKE:
      return Object.assign({}, state, {
        [likeData.like.photo_id]: {
          pending: true
        }
      });
    case RECEIVE_LIKE_STATE:
      let newState = Object.assign({}, state, {
        [likeData.id]: {
          pending: false,
          liked: likeData.liked,
          num_likes: likeData.num_likes
        }
      });
      return newState;
    default:
      return state;
  }
};

export default LikeReducer;
