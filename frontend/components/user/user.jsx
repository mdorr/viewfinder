import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.handleFollow = this.handleFollow.bind(this);
		this.editProfile = this.editProfile.bind(this);
	}

	// Remember to include componentWillReceiveProps(newProps) (if required)

	editOrFollowButton() {
		// Should return
		return (
			<button onClick={this.handleFollow}  className="profileButton">Edit/Follow</button>
		);
	}

	handleFollow () {
		console.log("Follow/unfollow button clicked");
	}

	editProfile () {
		console.log("edit profile button clicked");
	}

	render() {
		return (
			<section className="userProfile">
				<div className="coverImage ">
					<div className="profilePictureLarge">

					</div>
				</div>
				<div className="profileButtons">
					{ this.editOrFollowButton() }
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
