import React from 'react';
import { Link, withRouter } from 'react-router';

class GreetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
		e.preventDefault();
		const user = { username: 'guest', password: 'password'};
		this.props.login({ user }).then(() => this.props.router.push("/feed")); // Redirect after guest login
	}

  render() {
    let mainPhoto = {
      backgroundImage: 'url(' + window.coverImg + ')'
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
          <div className="welcomePageFooterContainer">
            <h4>About Viewfinder</h4>
            <p>
              Viewfinder is a photo community for discovering and sharing the very best work by the most talented photographs worldwide.
            </p>
            <p>
              Viewfinder has been created by Maurice Spiewack as the capstone project in the Full Stack Developer course at App Academy NYC.
            </p>
          </div>
          <div className="welcomePageFooterContainer">
            <h4>Links</h4>
            <ul>
              <li><a href="https://github.com/mdorr/viewfinder">GitHub</a></li>
              <li><a href="http://www.spiewack.com">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/mspiew">LinkedIn</a></li>
              <li><a href="https://www.appacademy.io/">App Academy</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(GreetingPage);
