import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
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

const personalGreeting = (currentUser, logout) => (
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

const PageHeader = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default PageHeader;
