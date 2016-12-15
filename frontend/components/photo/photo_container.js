import { connect } from 'react-redux';
import Photo from './photo';
import { like, unlike } from './../../actions/like_actions';

const mapStateToProps = (_state, ownProps) => {
  return {
    image_url: ownProps.photo.image_url,
    photo_user: ownProps.photo.user,
    description: ownProps.photo.description,
    likes: ownProps.photo.likes,
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
