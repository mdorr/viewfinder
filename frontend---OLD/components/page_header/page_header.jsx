import React from 'react';
import { Link } from 'react-router';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <header className="home-header group">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
          <ul>
            <li>{this.props.currentUser.username}</li>
            <li><button onClick={logout}>Log Out</button></li>
          </ul>
        </header>
      );
    } else {
      return (
        <header className="home-header group">
          <ul>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        </header>
      );
    }
  }

}
export default PageHeader;
