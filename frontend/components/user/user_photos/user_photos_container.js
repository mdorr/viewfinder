import { connect } from 'react-redux';
import UserPhotos from './user_photos';

const mapStateToProps = ({ userDetails }) => {
  return {
    photos: userDetails.details.photos
  };
};

export default connect(
  mapStateToProps,
  null
)(UserPhotos);
