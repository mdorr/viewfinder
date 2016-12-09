import React from 'react';
import { Link } from 'react-router';


class GreetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
		e.preventDefault();
		const user = { username: 'guest', password: 'password'};
		this.props.login({ user });
	}

  render() {
    let mainPhoto = {
      backgroundImage: `url('/assets/example-photos/mainPageCover.jpg')`
    };

    return (
      <div>
        <section className="welcomePageMainPhoto" style={ mainPhoto }>
          <div className="welcomePageGreeting">
            <h2>Home to everyone's best photos</h2>
            <h3>Showcase your work, discover amazing photos, and stay inspired.</h3>
          </div>
          <div className="welcomePageButtons">
            <button><Link to="/signup">Sign up today</Link></button>

            <button onClick={this.handleGuestLogin}>Explore as Guest</button>
          </div>
        </section>
        <footer className="welcomePageFooter">

        </footer>
      </div>
    );
  }
}

export default GreetingPage;
