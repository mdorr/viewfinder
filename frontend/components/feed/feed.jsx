import React from 'react';
import { Link } from 'react-router';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGuestLogin(e) {
		e.preventDefault();
		const user = { username: 'guest', password: 'password'};
		this.props.login({ user });
	}

  render() {
    return (
      <section>
        This is the picture feed.
        { this.props.children }
      </section>
    );
  }
}

export default Feed;
