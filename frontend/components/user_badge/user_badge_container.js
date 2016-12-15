import { connect } from 'react-redux';
import UserBadge from './user_badge';
import { fetchUserDetails } from '../../actions/user_actions';

const mapStateToProps = ( { userDetails }, ownProps ) => {
  return {
    badgeSize: ownProps.badgeSize,
    fontSize: ownProps.fontSize,
    extraPadding: ownProps.extraPadding,
    user_id: ownProps.user_id,
    userDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetails: userId => dispatch(fetchUserDetails(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBadge);
