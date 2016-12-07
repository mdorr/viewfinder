import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	otherLink() {
    if (this.props.formType === "login") {
      return (<p>Don't have an account? <Link to="/signup">Sign up</Link></p>);
    } else {
      return (<p>Already have an account? <Link to="/login">Log in</Link></p>);
    }
  }

	readableFormTypeName() {
    return this.props.formType === "login" ? "Log in" : "Sign up";
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<section className="session">
				{this.renderErrors()}
        <form onSubmit={ this.handleSubmit }>
          <ul>
            <li>
              <h2>{ this.readableFormTypeName() } to viewfinder</h2>
            </li>
            <li>
              <label>
                Username:
              </label>
            </li>
            <li>
              <input value={ this.state.username } onChange={ this.update('username') } />
            </li>
            <li>
              <label>
                Password:
              </label>
            </li>
            <li>
              <input type="password" value={ this.state.password } onChange={ this.update('password') } />
            </li>
            <li>
              <button type="submit">{ this.readableFormTypeName() }</button>
            </li>
          </ul>
        </form>
        { this.otherLink() }
      </section>
		);
	}

}

export default withRouter(SessionForm);
