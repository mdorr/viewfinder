import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/follow_actions';
import Follow from './follow';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    currentUser: session.currentUser,
    followUserId: parseInt(ownProps.followUserId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: newFollow => dispatch(follow(newFollow)),
    unfollow: deleteFollow => dispatch(unfollow(deleteFollow))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
