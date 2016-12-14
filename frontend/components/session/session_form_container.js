import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)) // For guest login
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
