import React from 'react';
import { Link, withRouter } from 'react-router';

class PageHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

    handleLogout() {
    this.props.logout();
    this.props.router.push("/"); // Ensure that we are returned to home page after logout
  }

  sessionLinks () {
    return (
      <header className="home-header group">
        <Link to="/">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        </Link>
        <nav className="login-signup">
          <ul>
            <li><Link to="/login" className="home-header-links">Log in</Link></li>
            <li className="green"><Link to="/signup"  className="home-header-links" activeClassName="current">Sign up</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  personalGreeting (currentUser) {
    let userPath = "/user/" + currentUser.id;

    let badgePicture = {
			backgroundSize: '28px 28px',
      backgroundImage: `url(${currentUser.profile_picture})`
		};

    return (
      <header className="home-header group">
        <Link to="/">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        </Link>
        <nav className="login-signup">
          <ul>
            <li><Link to={ userPath } className="home-header-links">
              <div className="profilePictureSmall"
                style={badgePicture}>
              </div>
              { currentUser.username }
            </Link></li>
            <li><a onClick={this.handleLogout} className="home-header-links">Log Out</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  render () {
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser) : this.sessionLinks()
    );
  }
}

export default withRouter(PageHeader);
