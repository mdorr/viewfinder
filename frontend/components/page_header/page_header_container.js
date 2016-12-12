import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { upload } from './../../actions/photo_actions';
import PageHeader from './page_header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  upload: photoData => dispatch(upload(photoData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeader);
