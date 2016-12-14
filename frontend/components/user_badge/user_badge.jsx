import React from 'react';

const UserBadge = ({ user, badgeSize, fontSize, extraPadding }) => {

  extraPadding = parseInt(extraPadding);
  badgeSize = parseInt(badgeSize);
  fontSize = parseInt(fontSize);

  let badgePadding = 0;
  let fontPadding = 0;

  let badgeSizeWithBorder = badgeSize + 4;

  if (badgeSizeWithBorder > fontSize) {
    fontPadding = (badgeSizeWithBorder - fontSize) / 2;
  } else if (badgeSizeWithBorder < fontSize) {
    badgePadding = (fontSize - badgeSizeWithBorder) / 2;
  }

  let badgePicture = {
    backgroundSize: `${ badgeSize }px ${ badgeSize }px`,
    backgroundImage: `url(${ user.profile_picture_url })`,
    display: 'inline-block',
    width: `${ badgeSize }px`,
    height: `${ badgeSize }px`,
    border: '2px solid #fff',
    borderRadius: '50%',
    float: 'left',
    marginRight: '10px',
    padding: `${ badgePadding }px`,
  };

  let badgeText = {
    fontSize: `${ fontSize }px`,
    textTransform: 'capitalize',
    padding: `${ fontPadding }px`,
  };

  let container = {
    padding: `${ extraPadding }px`
  };

  return (
    <ul style={ container }>
      <li>
        <div style={ badgePicture }> </div>
      </li>
      <li>
        <p style={ badgeText }>
          { user.readableUserName }
        </p>
      </li>
    </ul>
  );
};

export default UserBadge;
