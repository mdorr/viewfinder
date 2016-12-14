import { connect } from 'react-redux';
import UserPhotos from './user_photos';

const mapStateToProps = ({ userDetails, loading }) => {
  return {
    userDetails,
    loading: (loading.userPhotosLoading || loading.userDetailsLoading),
  };
};

export default connect(
  mapStateToProps,
  null
)(UserPhotos);
