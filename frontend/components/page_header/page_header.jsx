import React from 'react';
import { Link } from 'react-router';


class PageHeader extends React.Component {
  constructor(props){
    super(props);
  }

  sessionLinks () {
    return (
      <header className="home-header group">
        <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        <nav className="login-signup">
          <ul>
            <li><Link to="/login" activeClassName="current">Log in</Link></li>
            <li className="green"><Link to="/signup" activeClassName="current">Sign up</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  personalGreeting (currentUser, logout) {
    return (
      <header className="home-header group">
        <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        <nav className="login-signup">
          <ul>
            <li><Link to="/user">{ currentUser.username }</Link></li>
            <li><a onClick={logout}>Log Out</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  render () {
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
    );
  }

}

export default PageHeader;
