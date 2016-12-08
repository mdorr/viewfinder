import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
	}

	// Remember to include componentWillReceiveProps(newProps) (if required)

	render() {
		return (
			<section className="userProfile">
				<div className="coverImage ">
					<div className="profilePictureLarge">

					</div>
				</div>
				<div className="userInfo">
					<h2>Username</h2>
					<p>Statistics for user id { this.props.params.userId }</p>
				</div>
      </section>
		);
	}
}

export default withRouter(User);
