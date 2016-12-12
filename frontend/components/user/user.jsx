import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.followUser = this.followUser.bind(this);
		this.unfollowUser = this.unfollowUser.bind(this);

		Modal.setAppElement('#root');

		this.state = {
			modalIsOpen: false,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
		this.displayedUserName = this.displayedUserName.bind(this);
		this.isUserFollowed = this.isUserFollowed.bind(this);
	}

	componentDidMount() {
		this.props.fetchUserDetails(this.props.params.userId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId) {
			this.props.fetchUserDetails(nextProps.params.userId);
		}
	}

	isUserFollowed (otherUserId) {
		for (let i = 0; i < this.props.currentUser.followed.length; i++) {
				if (this.props.currentUser.followed[i].id === parseInt(otherUserId)) {
					return true;
				}
		}
		return false;
	}

	followUser () {
		let follow = {
			follow: {
				following_user_id: this.props.currentUser.id,
				followed_user_id: this.props.params.userId
			}
		};
		this.props.follow(follow).then(console.log("Followed"));
	}

	unfollowUser () {
		let unfollow = {
			follow: {
				following_user_id: this.props.currentUser.id,
				followed_user_id: this.props.params.userId
			}
		};
		this.props.unfollow(unfollow).then(console.log("Unfollowed"));
	}

	editOrFollowButton() {
		if (this.props.currentUser && this.props.currentUser.id == parseInt(this.props.params.userId)) {
			return (<button onClick={this.openModal}  className="profileButton">Edit your profile</button>);
		} else {
			// TODO: Colors: Blue when not followed, Green when followed, red hover to unfollow

			if (this.isUserFollowed (this.props.params.userId)) {
				return (<button onClick={this.unfollowUser}  className="profileButton">Unfollow</button>);
			} else {
				return (<button onClick={this.followUser}  className="profileButton">Follow</button>);
			}
		}
	}

	// Users can optionally enter their first
	displayedUserName (details) {
		let userName = details.username;
		if (details.firstname || details.lastname) {
			userName = `${details.firstname} ${details.lastname}`;
		}
		return userName.trim();
	}


	openModal () {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal () {
		this.setState (merge(this.state, this.props.userDetails.details));
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	saveChanges () {
		let updatedUser = {
			user: this.state,
			id: this.state.id
		};
		this.props.updateUser(updatedUser);
		this.closeModal();
	}

	closeModal () {
		this.setState({modalIsOpen: false});
	}

	render() {
		const { userDetails, children } = this.props;

		if (!userDetails.details) {
			return (<div></div>);
		}

		const details = userDetails.details;

		let profilePicture = {
			backgroundImage: `url(${details.profile_picture})`,
			backgroundSize: '100px 100px'
		};

		let coverImage = {
			backgroundImage: `url(${details.cover_image})`
		};

		return (
			<section className="userProfile">
        <Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					className="ModalClass"
          overlayClassName="OverlayClass"
					contentLabel="Edit User">

					<div className="modalCoverImage" style={coverImage}>
						<div className="profilePictureLarge" style={profilePicture}>

						</div>
					</div>

					<div className="modalForm">
						<label>Name</label>
						<div className="modalInputRow">
							<input value={ this.state.firstname } onChange={ this.update('firstname') } />
							<input value={ this.state.lastname } onChange={ this.update('lastname') } />
						</div>

						<label>Location</label>
						<div className="modalInputRow">
							<input value={ this.state.city } onChange={ this.update('city') } />
							<input value={ this.state.country } onChange={ this.update('country') } />
						</div>

						<label>About (optional)</label>
						<textarea onChange={ this.update('description') } value= { this.state.description }></textarea>

						<div className="modalInputRowRight">
							<button className="modalFormCancelButton" onClick={this.closeModal}>Cancel</button>
							<button className="modalFormGreenButton" onClick={this.saveChanges}>Save</button>
						</div>
					</div>
        </Modal>

				<div className="coverImage">
					<div className="profilePictureLarge" style={profilePicture}>
					</div>
				</div>
				<div className="profileButtons">
					{ this.editOrFollowButton() }
				</div>
				<div className="userInfo">
					<h2>{ this.displayedUserName (details) }</h2>
					<p>{ details.followed.length } users followed - { details.followers.length } users following</p>
				</div>
				{ children }
      </section>
		);
	}
}

export default withRouter(User);
