import { connect } from 'react-redux';
import { userDetails } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    userDetails: userId => dispatch(userDetails(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
