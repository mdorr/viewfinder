import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/follow_actions';
import Follow from './follow';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    curUser: session.currentUser,
    followUserId: parseInt(ownProps.followUserId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: followData => dispatch(follow(followData)),
    unfollow: unfollowData => dispatch(unfollow(unfollowData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
