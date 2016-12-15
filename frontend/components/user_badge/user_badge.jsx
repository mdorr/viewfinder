import React from 'react';


class UserBadge extends React.Component {
  constructor(props) {
    super(props);

    this.extraPadding = parseInt(this.props.extraPadding);
    this.badgeSize = parseInt(this.props.badgeSize);
    this.fontSize = parseInt(this.props.fontSize);

    this.badgePadding = 0;
    this.fontPadding = 0;

    let badgeSizeWithBorder = this.badgeSize + 4;
    if (badgeSizeWithBorder > this.fontSize) {
      this.fontPadding = (badgeSizeWithBorder - this.fontSize) / 2;
    } else if (badgeSizeWithBorder < this.fontSize) {
      this.badgePadding = (this.fontSize - badgeSizeWithBorder) / 2;
    }

    this.state = {
      profilePictureUrl: "",
      readableUserName: ""
    };
  }

  componentWillMount() {
    this.props.fetchUserDetails(this.props.user_id);
  }

  componentWillReceiveProps (newProps) {
    let details = newProps.userDetails.details;
    if (details && details.id == this.props.user_id) {
      let newState = {
        profilePictureUrl: details.profile_picture_url,
        readableUserName: details.readableUserName
      };

      if (newState != this.state) {
        this.setState(newState);
      }
    }
  }

  badgePicture () {
    return ({
      backgroundSize: `${ this.badgeSize }px ${ this.badgeSize }px`,
      backgroundImage: `url(${ this.state.profilePictureUrl })`,
      display: 'inline-block',
      width: `${ this.badgeSize }px`,
      height: `${ this.badgeSize }px`,
      border: '2px solid #fff',
      borderRadius: '50%',
      float: 'left',
      marginRight: '10px',
      padding: `${ this.badgePadding }px`,
    });
  }

  badgeText () {
    return ({
      fontSize: `${ this.fontSize }px`,
      textTransform: 'capitalize',
      padding: `${ this.fontPadding }px`,
    });
  }

  container () {
    return ({
      padding: `${ this.extraPadding }px`
    });
  }

  render () {

    return (
      <ul style={ this.container() }>
        <li>
          <div style={ this.badgePicture() }> </div>
        </li>
        <li>
          <p style={ this.badgeText() }>
            { this.state.readableUserName }
          </p>
        </li>
      </ul>
    );
  }
}

export default UserBadge;
