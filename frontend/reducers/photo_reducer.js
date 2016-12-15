import { REQUEST_PHOTO, RECEIVE_PHOTO } from './../actions/photo_actions';

const PhotoReducer = (state = { }, action) => {
  switch(action.type) {
    case REQUEST_PHOTO:
    case RECEIVE_PHOTO:
    default:
      return state;
  }
};

export default PhotoReducer;
