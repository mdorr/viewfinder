import React from 'react';
import UserBadgeContainer from './../user_badge/user_badge_container';
import LikeContainer from './../like/like_container';
import Loading from './../loading/loading';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.photoElement = this.photoElement.bind(this);
    this.photoInfo = this.photoInfo.bind(this);
    this.photoDescription = this.photoDescription.bind(this);

    this.state = {
      image_url: "",
      user_id: undefined,
      likes: undefined,
      description: undefined,
      loading: true
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
        loading: photo.loading
      };

      if (newState != this.state) {
        this.setState(newState);
      }
    }
  }

  photoElement () {
    return (
      <div className="photo">
        <img src={ this.state.image_url }></img>
      </div>
    );
  }

  photoInfo () {
    let photoInfoDomObject = null;
    if (this.state.user_id) {
      photoInfoDomObject = (
        <div className="photoInfo group">
          <div className="userBadge">
            <UserBadgeContainer user_id={ this.state.user_id } badgeSize='30' fontSize='14' extraPadding='0' />
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

  render () {
    if (this.state.loading) {
      return (
        <div key={ this.props.id } className="feedElement">
          <Loading />
        </div>
      );
    } else {
      return (
        <div key={ this.props.id } className="feedElement">
          { this.photoElement() }
          { this.photoInfo() }
          { this.photoDescription() }
        </div>
      );
    }


  }
}
export default Photo;
