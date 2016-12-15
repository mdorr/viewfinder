import { connect } from 'react-redux';
import Photo from './photo';
import { getPhoto } from './../../actions/photo_actions';

const mapStateToProps = ( { photos, session }, ownProps) => {
  return {
    id: ownProps.id,
    photos: photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: photo_id => dispatch(getPhoto(photo_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
