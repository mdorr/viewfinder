import React from 'react';
import UserBadge from './../user_badge/user_badge';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.photoElement = this.photoElement.bind(this);
    this.photoInfo = this.photoInfo.bind(this);
    this.photoDescription = this.photoDescription.bind(this);
  }

  photoElement () {
    return (
      <div className="photo">
        <img src={ this.props.image_url }></img>
      </div>
    );
  }

  photoInfo () {
    return (
      <div className="photoInfo">
        <UserBadge user={ this.props.photo_user } badgeSize='30' fontSize='14' extraPadding='0' />
        <p>Likes: { this.props.likes } </p>
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
