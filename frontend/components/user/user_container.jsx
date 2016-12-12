import { connect } from 'react-redux';
import { fetchUserDetails, updateUser } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = ({ userDetails, session }) => {
  return { userDetails, currentUser: session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetails: userId => dispatch(fetchUserDetails(userId)),
    updateUser: user => dispatch(updateUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
