import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import LoginButtons from './header_components/login_buttons'

class PageHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.openUpload = this.openUpload.bind(this);
    this.afterOpenUpload = this.afterOpenUpload.bind(this);
    this.updateFiles = this.updateFiles.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveImages = this.saveImages.bind(this);
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
    debugger
    var formData = new FormData();
    formData.append("photo[image]", this.state.imageFile);
    //PhotoApi.createPhoto(formData).then(RECEIVE PHOTOS)

    this.closeModal();
  }

  closeModal () {
    this.setState({ uploadModalIsOpen: false });
  }

  loginSignupNavigation () {
    return (
      <LoginButtons />
    );
  }

  loggedInNavigation (currentUser) {
    let userPath = "/user/" + currentUser.id;

    let badgePicture = {
			backgroundSize: '28px 28px',
      backgroundImage: `url(${currentUser.profile_picture})`
		};

    return (
      <header className="home-header group">
        <Link to="/">
          <img className="logoImg" alt="viewfinder logo" src={ window.logoImg } />
        </Link>
        <nav className="login-signup">
          <ul>
            <li><Link to={ userPath } className="home-header-links">
              <div className="profilePictureSmall"
                style={badgePicture}>
              </div>
              { currentUser.username }
            </Link></li>
            <li>
              <a onClick={this.openUpload} className="home-header-links">Upload</a>
            </li>
            <li>
              <a onClick={this.handleLogout} className="home-header-links">Log Out</a>
            </li>
          </ul>
        </nav>
        <Modal
          isOpen={ this.state.uploadModalIsOpen }
          onAfterOpen={ this.afterOpenUpload }
					onRequestClose={ this.closeModal}
          className="uploadModal"
          overlayClassName="OverlayClass"
          contentLabel="Upload photos">
            <div>
              <div className="uploadButtonContainer">
                <label htmlFor="file_button" className="uploadButton">
                  Select Photos
                </label>
                <input id="file_button" className="hiddenFileInput" type="file" onChange={this.updateFiles}/>

                <div className="modalInputRowRight">
                  <button className="modalFormCancelButton" onClick={this.closeModal}>Cancel</button>
                  <button className="modalFormGreenButton" onClick={this.saveImages}>Save</button>
                </div>
              </div>
            </div>
          </Modal>
      </header>
    );
  }

  render () {
    return (
      this.props.currentUser ? this.loggedInNavigation(this.props.currentUser) : this.loginSignupNavigation()
    );
  }
}

export default withRouter(PageHeader);
