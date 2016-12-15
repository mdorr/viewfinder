import { connect } from 'react-redux';
import Photo from './photo';

const mapStateToProps = ( { session }, ownProps) => {
  return {
    id: ownProps.photo.id,
    currentUserId: session.currentUser.id,
    image_url: ownProps.photo.image_url,
    photo_user: ownProps.photo.user,
    description: ownProps.photo.description,
    photo_likes: ownProps.photo.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likePhoto: likeData => dispatch(like(likeData)),
    unlikePhoto: likeData => dispatch(unlike(likeData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
