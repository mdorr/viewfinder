import React from 'react';
import UserBadgeContainer from './../user_badge/user_badge_container';
import LikeContainer from './../like/like_container';
import Loading from './../loading/loading';
import Modal from 'react-modal';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    Modal.setAppElement('#root');

    this.photoElement = this.photoElement.bind(this);
    this.photoInfo = this.photoInfo.bind(this);
    this.photoDescription = this.photoDescription.bind(this);
    this.photoKeywords = this.photoKeywords.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalContent = this.modalContent.bind(this);

    this.state = {
      image_url: "",
      user_id: undefined,
      likes: undefined,
      description: undefined,
      keywords: [],
      loading: true,
      modalIsOpen: false,
    };
  }

  componentWillMount () {
    this.props.getPhoto(this.props.id);
  }

  componentWillReceiveProps (newProps) {
    const photo = newProps.photos[newProps.id];
    if (photo) {
      let newState = {
        image_url: photo.image_url,
        user_id: photo.user_id,
        likes: photo.likes,
        description: photo.description,
        keywords: photo.keywords,
        loading: photo.loading,
      };

      if (newState != this.state) {
        this.setState(newState);
      }
    }
  }

  photoElement () {
    return (
      <div className="photo">
        <img className="zoomHover" src={ this.state.image_url }></img>
      </div>
    );
  }

  photoInfo () {
    let photoInfoDomObject = null;
    if (this.state.user_id) {
      photoInfoDomObject = (
        <div className="photoInfo group">
          <div className="userBadge">
            <UserBadgeContainer user_id={ this.state.user_id } badgeSize='30' fontSize='24' extraPadding='0' />
          </div>
          <div className="likeContainer">
            <LikeContainer photo_id={ this.props.id } photo_likes={ this.state.likes } />
          </div>
        </div>
      );
    }
    return photoInfoDomObject;
  }

  photoDescription () {
    let domObject = null;
    if (this.state.description) {
      domObject = (
        <div className="photoDescription">
          { this.state.description }
        </div>
      );
    }
    return domObject;
  }

  photoKeywords () {
    let domObject = null;
    if (this.state.keywords && this.state.keywords.length > 0) {
      domObject = (
        <div className="photoDescription">
          Keywords: { this.state.keywords.join(', ') }
        </div>
      );
    }
    return domObject;
  }

  // Modal helpers
  openModal () {
    this.setState({ modalIsOpen: true, });
  }

  closeModal () {
    this.setState({ modalIsOpen: false, });
  }


  // Modal
  modalContent () {
    let modalBody;
    modalBody = (
      <img key={ this.props.id } className="fullscreenPhoto" src={ this.state.image_url } />
    );

    return (
      <Modal
        isOpen={ this.state.modalIsOpen }
        onRequestClose={ this.closeModal }
        className="fullscreenPhotoModal"
        overlayClassName="fullscreenPhotoModalOverlay"
        contentLabel="Full Screen Image viewer">
        { modalBody }
      </Modal>
    );
  }

  render () {
    if (this.state.loading) {
      return (
        <div key={ this.props.id } className="feedElement">
          <Loading />
        </div>
      );
    } else {
      if (this.props.imgOnly) {
        return (
          <img key={ this.props.id } className="userPhoto" src={ this.state.image_url } />
        );
      } else {
        return (
          <div key={ this.props.id } onClick={ this.openModal } className="feedElement">
            { this.photoElement() }
            { this.photoInfo() }
            { this.photoDescription() }
            { this.photoKeywords () }
            { this.modalContent() }
          </div>
        );
      }
    }
  }
}
export default Photo;
