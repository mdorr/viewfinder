import React from 'react';
import { Link, withRouter } from 'react-router';


class PageHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    console.log("Handling the logout");
    this.props.logout();
    this.props.router.push("/");
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
            <li><a onClick={this.handleLogout}>Log Out</a></li>
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

export default withRouter(PageHeader);
