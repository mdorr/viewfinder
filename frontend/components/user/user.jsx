import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
	}

	// Remember to include componentWillReceiveProps(newProps)

	render() {
		return (
			<section className="userProfile">
        <p>This is the user profile for id { this.props.params.userId }</p>
      </section>
		);
	}
}

export default withRouter(User);
