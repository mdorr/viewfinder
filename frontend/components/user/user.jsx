import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="userProfile">
        <p>This is the user profile</p>
      </section>
		);
	}
}

export default withRouter(User);
