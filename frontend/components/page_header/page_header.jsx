import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import LoginButtons from './header_components/login_buttons'
import UserBadge from './../user_badge/user_badge';

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

    Modal.setAppElement('#root');

    this.state = {
      uploadModalIsOpen: false,
      imageUrl: "",
      imageFile: null
    };
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push("/")); // Redirect after logout
  }

  openUpload() {
    this.setState({ uploadModalIsOpen: true });
  }

  afterOpenUpload () {
    this.setState({
      imageUrl: "",
      imageFile: null
    });
  }

  updateFiles (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = function () {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null});
    }
  }

  saveImages () {
    let formData = new FormData();
    formData.append("photo[user_id]", this.props.currentUser.id);
    formData.append("photo[picture]", this.state.imageFile);
    this.props.upload(formData); //then: reveice photos or redirect to user page //PhotoApi.createPhoto(formData).then(RECEIVE PHOTOS)

    this.closeModal();
  }

  closeModal () {
   this.setState({ uploadModalIsOpen: false });
 }

  modalContent () {
    let modalBody;
    if ( this.state.imageUrl ) {
      modalBody = (
        <div className="uploadDetailsContainer">
          <div className="photoUploadPreview">
            <img src={ this.state.imageUrl }></img>
          </div>
          <div className="uploadPictureSidebar group">
            <div className="confirmUploadButtons">
              <button className="modalFormGreenButton" onClick={ this.saveImages }>Save</button>
            </div>
          </div>
        </div>
      );
    } else {
      modalBody = (
        <div className="uploadButtonContainer">
          <label htmlFor="file_button" className="uploadButton">
            Select Photos
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

  loggedInNavigation (currentUser) {
    let userPath = "/user/" + currentUser.id;

    return (
      <header className="home-header group">
        <Link to="/">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        </Link>
        <nav className="login-signup">
          <ul>
            <li><Link to={ userPath } className="home-header-links">
              <UserBadge user={currentUser} badgeSize='28' fontSize='14' extraPadding='0' />
            </Link></li>
            <li>
              <a onClick={this.openUpload} className="home-header-links">Upload</a>
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

  render () {
    return (
      this.props.currentUser ? this.loggedInNavigation(this.props.currentUser) : <LoginButtons />
    );
  }
}

export default withRouter(PageHeader);
