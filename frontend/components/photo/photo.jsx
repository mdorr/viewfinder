import React from 'react';
import UserBadge from './../user_badge/user_badge';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.photoElement = this.photoElement.bind(this);
    this.photoInfo = this.photoInfo.bind(this);
    this.photoDescription = this.photoDescription.bind(this);
    this.likeButton = this.likeButton.bind(this);

    this.state = {
      liked: false,
    };


    this.like = this.like.bind(this);
  }

  like () {
    this.setState({ liked: !this.state.liked });
  }

  photoElement () {
    return (
      <div className="photo">
        <img src={ this.props.image_url }></img>
      </div>
    );
  }

  likeButton () {
    if (this.state.liked) {
      return (
        <button onClick={this.like} className="likeButton liked">
          <i className="fa fa-heart" aria-hidden="true"></i> {this.props.likes}
        </button>
      );
    } else {
      return (
        <button onClick={this.like} className="likeButton">
          <i className="fa fa-heart-o" aria-hidden="true"></i> {this.props.likes}
        </button>
      );
    }
  }

  photoInfo () {
    return (
      <div className="photoInfo group">
        <div className="userBadge">
          <UserBadge user={ this.props.photo_user } badgeSize='30' fontSize='14' extraPadding='0' />
        </div>
        <div className="likeContainer">
          { this.likeButton() }
        </div>
      </div>
    );
  }

  photoDescription () {
    let domObject = null;
    if (this.props.description) {
      domObject = (
        <div className="photoDescription">
          { this.props.description }
        </div>
      );
    }
    return domObject;
  }

  render () {
    return (
      <div key={ this.props.id } className="feedElement">
        { this.photoElement() }
        { this.photoInfo() }
        { this.photoDescription() }
      </div>
    );
  }
}
export default Photo;
