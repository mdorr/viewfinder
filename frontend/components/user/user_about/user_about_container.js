import { connect } from 'react-redux';
import UserAbout from './user_about';

const mapStateToProps = ({ userDetails }) => {
  return { userDetails };
};

export default connect(
  mapStateToProps,
  null
)(UserAbout);
