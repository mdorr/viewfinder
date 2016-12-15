import { REQUEST_PHOTO, RECEIVE_PHOTO } from './../actions/photo_actions';

const PhotoReducer = (state = { }, action) => {
  switch(action.type) {
    case REQUEST_PHOTO:
      let photo_id = action.photo_id;
      return Object.assign({}, state, {
        [photo_id]: {
          loading: true
        }
      });
    case RECEIVE_PHOTO:
      let receivedPhoto = action.photoData;
      return Object.assign({}, state, {
        [receivedPhoto.id]: {
          image_url: receivedPhoto.image_url,
          likes: receivedPhoto.likes,
          user: receivedPhoto.user,
          description: receivedPhoto.description,
          loading: false
        }
      });
    default:
      return state;
  }
};

export default PhotoReducer;
