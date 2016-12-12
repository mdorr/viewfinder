import { connect } from 'react-redux';
import { fetchUserDetails, updateUser } from '../../actions/user_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import User from './user';

const mapStateToProps = ({ userDetails, session }) => {
  return { userDetails, currentUser: session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetails: userId => dispatch(fetchUserDetails(userId)),
    updateUser: user => dispatch(updateUser(user)),
    follow: userToFollow => dispatch(follow(userToFollow)),
    unfollow: followId => dispatch(unfollow(followId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
