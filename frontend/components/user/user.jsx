import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.handleFollow = this.handleFollow.bind(this);
		this.editProfile = this.editProfile.bind(this);
	}

	componentDidMount() {
		this.props.fetchUserDetails(this.props.params.userId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId)
			this.props.fetchUserDetails(nextProps.params.userId);
	}

	editOrFollowButton() {
		if (parseInt(this.props.params.userId) == this.props.loggedInUser) {
			return (<button onClick={this.handleFollow}  className="profileButton">Edit profile</button>);
		} else {
			return (<button onClick={this.handleFollow}  className="profileButton">Follow/Unfollow</button>);
		}
	}

	handleFollow () {
		console.log("Follow/unfollow button clicked");
	}

	editProfile () {
		console.log("edit profile button clicked");
	}

	render() {
		const { userDetails, children } = this.props;
		if (!userDetails.details) {
			return (<div></div>);
		}

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
					<h2>{ userDetails.details.username }</h2>
					<p>Statistics for user id { userDetails.details.id }</p>
				</div>
				{ children }
      </section>
		);
	}
}

export default withRouter(User);
