import React from 'react';
import { Link } from 'react-router';

const LoginButtons = () => (
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

export default LoginButtons;
