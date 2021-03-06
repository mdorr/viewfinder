import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';
import FollowContainer from './../follow/follow_container';
import UserDetails from './user_page_components/user_details';
import Loading from './../loading/loading';

class User extends React.Component {
	constructor(props) {
		super(props);

		Modal.setAppElement('#root');

		this.state = {
			modalIsOpen: false,
			profile_picture_url: "",
			cover_image_url: "",
		}; // URL already passed through normal state, see user view in backend

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
		this.isUserFollowed = this.isUserFollowed.bind(this);
		this.updateProfilePicture = this.updateProfilePicture.bind(this);
		this.updateCoverImage = this.updateCoverImage.bind(this);
	}

	// State updates
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

	// Modal helpers
	openModal () {
		this.setState({
			modalIsOpen: true,
			cover_image_file: null,
			profile_picture_file: null,
		}); // files can be set to null, even if we already have pictures here. only the stored urls will affect the display
	}

	afterOpenModal () {
		this.setState (merge(this.state, this.props.userDetails.details));
	}

	closeModal () {
		this.setState({
			modalIsOpen: false,
			profile_picture_url: "",
			cover_image_url: "",
			cover_image_file: null,
			profile_picture_file: null,
		});
	}

	// State helpers
	update(property) {
		return e => this.setState({ [property]: e.target.value });
	}

	updateProfilePicture(e) {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = function () {
			this.setState({
				profile_picture_url: reader.result,
				profile_picture_file: file
			});
		}.bind(this);
		if (file) {
			reader.readAsDataURL(file);
		} else {
			this.setState({ profile_picture_file: null });
		}
	}

	updateCoverImage(e) {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = function () {
			this.setState({ cover_image_url: reader.result, cover_image_file: file});
		}.bind(this);
		if (file) {
			reader.readAsDataURL(file);
		} else {
			this.setState({ cover_image_file: null });
		}
	}

	saveChanges () {
		let formData = new FormData();
		formData.append("user[id]", this.state.id);
		formData.append("user[firstname]", this.state.firstname);
		formData.append("user[lastname]", this.state.lastname);
		formData.append("user[city]", this.state.city);
		formData.append("user[country]", this.state.country);
		formData.append("user[description]", this.state.description);
		if (this.state.profile_picture_file) {
			formData.append("user[profile_picture]", this.state.profile_picture_file);
		}
		if (this.state.cover_image_file) {
			formData.append("user[cover_image]", this.state.cover_image_file);
		}

		this.props.updateUser(formData);
		this.closeModal();
	}

	// Render helpers
	editOrFollowButton() {
		if (this.props.currentUser && this.props.currentUser.id == parseInt(this.props.params.userId)) {
			return (<button onClick={this.openModal}  className="profileButton">Edit your profile</button>);
		} else {
			return <FollowContainer followUserId={ this.props.params.userId } />;
		}
	}

	// Render
	render() {
		const { userDetails, children, loading } = this.props;

		if (loading) {
			return <Loading />;
		}

		if (!userDetails.details) {
			return (<div></div>);
		}

		const details = userDetails.details;

		let profilePicture = { backgroundSize: '100px 100px', backgroundPosition: 'center center' };
		if (this.state.profile_picture_url) {
			profilePicture.backgroundImage = `url(${this.state.profile_picture_url})`;
		} else {
			profilePicture.backgroundImage = `url(${details.profile_picture_url})`;
		}

		let coverImage = { display: 'cover', backgroundPosition: 'center center' };
		if (this.state.cover_image_url) {
			coverImage.backgroundImage = `url(${this.state.cover_image_url})`;
		} else {
			coverImage.backgroundImage = `url(${details.cover_image_url})`;
		}

		return (
			<section className="userProfile">
        <Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					className="ModalClass"
          overlayClassName="OverlayClass"
					contentLabel="Edit User">

					<div className="coverImage modalCoverImage" style={coverImage}>
						<label htmlFor="change_cover_image"><i className="fa fa-camera-retro"></i> Change your cover photo</label>
						<input id="change_cover_image" className="hiddenFileInput" type="file" onChange={ this.updateCoverImage } />
					</div>
					<div className="profilePictureLarge modalProfilePicture" style={profilePicture}>
						<label htmlFor="change_profile_picture"><i className="fa fa-camera-retro"></i></label>
						<input id="change_profile_picture" className="hiddenFileInput" type="file" onChange={ this.updateProfilePicture } />
					</div>

					<div className="modalForm">
						<label>Name</label>
						<div className="modalInputRow">
							<input value={ this.state.firstname } onChange={ this.update('firstname') } placeholder="First name" />
							<input value={ this.state.lastname } onChange={ this.update('lastname') } placeholder="Last name" />
						</div>

						<label>Location</label>
						<div className="modalInputRow">
							<input value={ this.state.city } onChange={ this.update('city') } placeholder="City" />
							<input value={ this.state.country } onChange={ this.update('country') } placeholder="Country" />
						</div>

						<label>About (optional)</label>
						<textarea onChange={ this.update('description') } value={ this.state.description } placeholder="Tell the world your story."></textarea>

						<div className="modalInputRowRight">
							<button className="modalFormCancelButton" onClick={this.closeModal}>Cancel</button>
							<button className="modalFormGreenButton" onClick={this.saveChanges}>Save</button>
						</div>
					</div>
        </Modal>

				<div className="coverImage" style={coverImage}>
				</div>
				<div className="profilePictureLarge" style={profilePicture}>
				</div>
				<div className="profileButtons">
					{ this.editOrFollowButton() }
				</div>
				<UserDetails details={details} />
				<div className="subNavigation">
					<ul>
						<li><Link to={ `/user/${ details.id }/photos/` } activeClassName="active">Photos</Link></li>
						<li><Link to={ `/user/${ details.id }/about/` } activeClassName="active">About</Link></li>
					</ul>
				</div>
				{ children }
      </section>
		);
	}
}

export default withRouter(User);
