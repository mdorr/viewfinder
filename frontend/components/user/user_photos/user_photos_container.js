import { connect } from 'react-redux';
import UserPhotos from './user_photos';

const mapStateToProps = ({ userDetails }) => {
  return { userDetails };
};

export default connect(
  mapStateToProps,
  null
)(UserPhotos);
