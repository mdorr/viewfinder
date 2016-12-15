import { connect } from 'react-redux';
import Like from './like';
import { like, unlike, getState } from './../../actions/like_actions';

const mapStateToProps = ( { session, likes }, ownProps ) => {
  return {
    likes,
    photo_id: ownProps.photo_id,
    photo_likes: ownProps.photo_likes,
    currentUserId: session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getState: likeData => dispatch(getState(likeData)),
    likePhoto: likeData => dispatch(like(likeData)),
    unlikePhoto: likeData => dispatch(unlike(likeData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
