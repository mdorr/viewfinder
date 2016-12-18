import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import GreetingPage from './greeting_page';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingPage);
