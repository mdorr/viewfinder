import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.handleFollow = this.handleFollow.bind(this);
		this.editProfile = this.editProfile.bind(this);

		Modal.setAppElement('#root');

		this.state = {
			modalIsOpen: false,
		};

		this.openEditProfileModal = this.openEditProfileModal.bind(this);
		this.closeEditProfileModal = this.closeEditProfileModal.bind(this);
		this.afterOpenEditProfileModal = this.afterOpenEditProfileModal.bind(this);
	}

	componentDidMount() {
		this.props.fetchUserDetails(this.props.params.userId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId) {
			this.props.fetchUserDetails(nextProps.params.userId);
		}
	}

	editOrFollowButton() {
		if (parseInt(this.props.params.userId) == this.props.loggedInUser) {
			return (<button onClick={this.openEditProfileModal}  className="profileButton">Edit your profile</button>);
		} else {
			// TODO: Colors: Blue when not followed, Green when followed, red hover to unfollow
			return (<button onClick={this.handleFollow}  className="profileButton">Follow/Unfollow</button>);
		}
	}

	handleFollow () {
		console.log("Follow/unfollow button clicked");
	}

	openEditProfileModal () {
		this.setState({modalIsOpen: true});
	}

	afterOpenEditProfileModal () {
		this.setState (merge(this.state, this.props.userDetails.details));
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	closeEditProfileModal (saveChanges = false) {
		if (saveChanges) {
			console.log("Saving changes");
		}
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
					onAfterOpen={this.afterOpenEditProfileModal}
					onRequestClose={this.closeEditProfileModal}
					className="ModalClass"
          overlayClassName="OverlayClass"
					contentLabel="Example Modal">

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
							<button className="modalFormCancelButton" onClick={this.closeEditProfileModal}>Cancel</button>
							<button className="modalFormGreenButton" onClick={this.closeEditProfileModal}>Save</button>
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
					<h2>{ details.username }</h2>
					<p>Statistics for user id { details.id }</p>
				</div>
				{ children }
      </section>
		);
	}
}

export default withRouter(User);
