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
		this.props.router.push("/");
	}

	otherLink() {
		if (this.props.formType === "login") {
      return (<li className="otherLink">Don't have an account? <Link to="/signup">Sign up</Link></li>);
    } else {
      return (<li className="otherLink">Already have an account? <Link to="/login">Log in</Link></li>);
    }
  }

	readableFormTypeName() {
    return this.props.formType === "login" ? "Log in" : "Sign up";
  }

	renderErrors() {
		return(
			<div className="error-wrapper">
				<div className="errorPopup">
					<ul>
						{this.props.errors.map((error, i) => (
							<li key={`error-${i}`}>
								{error}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<section className="session">
				{this.renderErrors()}
        <form className="sessionForm" onSubmit={ this.handleSubmit }>
          <ul>
            <li>
              <h2>{ this.readableFormTypeName() } to viewfinder</h2>
            </li>
            <li>
              <label>
                Username
              </label>
              <input value={ this.state.username } onChange={ this.update('username') } />
            </li>
            <li>
              <label>
                Password
              </label>
              <input type="password" value={ this.state.password } onChange={ this.update('password') } />
            </li>
            <li>
              <button type="submit" className="green">{ this.readableFormTypeName() }</button>
            </li>
						{ this.otherLink() }
          </ul>
        </form>
      </section>
		);
	}
}

export default withRouter(SessionForm);
