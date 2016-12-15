import { REQUEST_LIKE_STATE, RECEIVE_LIKE_STATE, REQUEST_LIKE, RECEIVE_LIKE, REQUEST_UNLIKE, RECEIVE_UNLIKE } from './../actions/like_actions';

const LikeReducer = (state = { }, action) => {
  const likeData = action.likeData;
  switch(action.type) {
    case REQUEST_LIKE_STATE:
    case REQUEST_LIKE:
    case REQUEST_UNLIKE:
      return Object.assign({}, state, {
        [likeData.like.photo_id]: { pending: true }
      });

    case RECEIVE_LIKE_STATE:
      if (likeData.user_id) {
        return Object.assign({}, state, {
          [likeData.photo_id]: {
            pending: false,
            liked: true
          }
        });
      } else {
        return Object.assign({}, state, {
          [likeData.photo_id]: {
            pending: false,
            liked: false
          }
        });
      }

    case RECEIVE_LIKE:
      return Object.assign({}, state, {
        [likeData.photo_id]: {
          pending: false,
          liked: true
        }
      });
    case RECEIVE_UNLIKE:
      return Object.assign({}, state, {
        [likeData.photo_id]: {
          pending: false,
          liked: false
        }
      });
    default:
      return state;
  }
};

export default LikeReducer;
