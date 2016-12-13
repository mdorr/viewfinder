import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';
import FollowContainer from './../follow/follow_container';
import UserDetails from './user_page_components/user_details';

class User extends React.Component {
	constructor(props) {
		super(props);

		Modal.setAppElement('#root');

		this.state = {
			modalIsOpen: false,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
		this.isUserFollowed = this.isUserFollowed.bind(this);
		this.fetchUserData = this.fetchUserData.bind(this);
	}

	componentDidMount() {
		this.fetchUserData(this.props.params.userId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId) {
			this.fetchUserData(nextProps.params.userId);
		}
	}

	fetchUserData(id) {
		this.props.fetchUserDetails(id);
		this.props.fetchUserPhotos(id);
	}

	isUserFollowed (otherUserId) {
		for (let i = 0; i < this.props.currentUser.followed.length; i++) {
				if (this.props.currentUser.followed[i].id === parseInt(otherUserId)) {
					return true;
				}
		}
		return false;
	}

	editOrFollowButton() {
		if (this.props.currentUser && this.props.currentUser.id == parseInt(this.props.params.userId)) {
			return (<button onClick={this.openModal}  className="profileButton">Edit your profile</button>);
		} else {
			return <FollowContainer followUserId={ this.props.params.userId } />;
		}
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

				<div className="coverImage">
					<div className="profilePictureLarge" style={profilePicture}>
					</div>
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
