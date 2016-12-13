import React from 'react';
import UserBadge from './../user_badge/user_badge';

const Photo = ({ data }) => {

  if (!data.description) {
    data.description = "IMG_" + data.id;
  }

  return (
  <div key={ data.id } className="feedElement">
    <div className="photo">
      <img src={ data.image_url }></img>
    </div>
    <div className="photoInfo">
      <UserBadge user={ data.user } badgeSize='30' fontSize='14' extraPadding='0' />
    </div>
    <div className="photoDescription">
      { data.description }
    </div>
  </div>
  );
};
export default Photo;
