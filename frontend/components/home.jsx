import React from 'react';
import { Link } from 'react-router';

const Home = ({ children }) => (
  <div>
    <header className="home-header group">
      <img className="mainLogo" src = "assets/vf-logo.png" />
      <ul>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </header>

    { children }
  </div>
);

export default Home;
