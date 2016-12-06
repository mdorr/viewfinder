import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.router.push("/"));
  }

  render () {
    return (
      <form className="session-form" onSubmit={ this.handleSubmit }>
        <ul>
          <li>
            <p>Please { this.props.formType } or { this.navLink() }</p>
          </li>
          <li>
            <label>
              Username:
              <input value={ this.state.username } onChange={ this.update('username') } />
            </label>
          </li>
          <li>
            <label>
              Password:
              <input type="password" value={ this.state.password } onChange={ this.update('password') } />
            </label>
          </li>
          <li>
            <button type="submit">{ this.props.formType }</button>
          </li>
        </ul>
      </form>
    );
  }
}
export default SessionForm;
