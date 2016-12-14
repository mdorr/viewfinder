import { connect } from 'react-redux';
import Photo from './photo';

const mapStateToProps = (_state, ownProps) => {
  return {
    image_url: ownProps.photo.image_url,
    photo_user: ownProps.photo.user,
    description: ownProps.photo.description,
    likes: ownProps.photo.likes,
  };
};

export default connect(
  mapStateToProps,
  null
)(Photo);
