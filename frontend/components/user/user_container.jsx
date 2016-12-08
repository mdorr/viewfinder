import { connect } from 'react-redux';
import { fetchUserDetails } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = ({ userDetails }) => {
  return { userDetails };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetails: (userId) => dispatch(fetchUserDetails(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
