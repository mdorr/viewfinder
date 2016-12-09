import { connect } from 'react-redux';
import App from './app.jsx';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

export default connect(
  mapStateToProps,
  null
)(App);
