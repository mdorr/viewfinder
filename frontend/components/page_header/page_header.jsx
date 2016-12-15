import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import LoginButtons from './header_components/login_buttons'
import UserBadgeContainer from './../user_badge/user_badge_container';

class PageHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.openUpload = this.openUpload.bind(this);
    this.afterOpenUpload = this.afterOpenUpload.bind(this);
    this.updateFiles = this.updateFiles.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveImages = this.saveImages.bind(this);
    this.modalContent = this.modalContent.bind(this);
    this.update = this.update.bind(this);

    Modal.setAppElement('#root');

    this.state = {
      uploadModalIsOpen: false,
      imageUrl: "",
      imageFile: null,
      description: ""
    };
  }

  // Logout helper
  handleLogout() {
    this.props.logout().then(() => this.props.router.push("/")); // Redirect after logout
  }

  // State helpers
  updateFiles (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = function () {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null, description: "" });
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  saveImages () {
    let formData = new FormData();
    formData.append("photo[user_id]", this.props.currentUser.id);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[picture]", this.state.imageFile);
    this.props.upload(formData); //then: reveice photos or redirect to user page //PhotoApi.createPhoto(formData).then(RECEIVE PHOTOS)

    this.closeModal();
  }

  // Modal helpers
  openUpload() {
    this.setState({ uploadModalIsOpen: true });
  }

  afterOpenUpload () {
    this.setState({
      imageUrl: "",
      imageFile: null,
      description: ""
    });
  }

  closeModal () {
    this.setState({ uploadModalIsOpen: false });
  }

  // Modal
  modalContent () {
    let modalBody;
    if ( this.state.imageUrl ) {
      modalBody = (
        <div className="uploadDetailsContainer">
          <img src={ this.state.imageUrl }></img>
          <ul>
            <li>
              <button className="uploadButton" onClick={ this.saveImages }>Publish</button>
            </li>
            <li>
              <textarea onChange={ this.update('description') } value={ this.state.description } placeholder="Enter a description for your photo."></textarea>
            </li>
          </ul>
        </div>
      );
    } else {
      modalBody = (
        <div className="uploadButtonContainer">
          <label htmlFor="file_button" className="uploadButton">
            Select Photo
          </label>
          <input id="file_button" className="hiddenFileInput" type="file" onChange={ this.updateFiles }/>
        </div>
      );
    }

    return (
      <Modal
        isOpen={ this.state.uploadModalIsOpen }
        onAfterOpen={ this.afterOpenUpload }
        onRequestClose={ this.closeModal }
        className="uploadModal"
        overlayClassName="OverlayClass"
        contentLabel="Upload photos">
        { modalBody }
      </Modal>
    );
  }

  // Render helpers
  loggedInNavigation (user) {
    let userPath = "/user/" + user.id;

    return (
      <header className="home-header group">
        <Link to="/">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        </Link>
        <nav className="login-signup">
          <ul>
            <li><Link to={ userPath } className="home-header-links">
              <UserBadgeContainer user_id={ user.id } badgeSize='28' fontSize='14' extraPadding='0' />
            </Link></li>
            <li>
              <a onClick={this.openUpload} className="home-header-links"><i className="fa fa-cloud-upload" aria-hidden="true"></i> Upload</a>
            </li>
            <li>
              <a onClick={this.handleLogout} className="home-header-links">Log Out</a>
            </li>
          </ul>
        </nav>
        { this.modalContent() }
      </header>
    );
  }

  // Render
  render () {
    return (
      this.props.currentUser ? this.loggedInNavigation(this.props.currentUser) : <LoginButtons />
    );
  }
}

export default withRouter(PageHeader);
