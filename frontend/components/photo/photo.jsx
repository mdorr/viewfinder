import React from 'react';
import UserBadge from './../user_badge/user_badge';

const Photo = ({ data }) => {

  let photoElement = (
    <div className="photo">
      <img src={ data.image_url }></img>
    </div>
  );

  let photoInfo = (
    <div className="photoInfo">
      <UserBadge user={ data.user } badgeSize='30' fontSize='14' extraPadding='0' />
    </div>
  );

  let photoDescription = null;
  if (data.description) {
    photoDescription = (
      <div className="photoDescription">
        { data.description }
      </div>
    );
  }

  return (
    <div key={ data.id } className="feedElement">
      { photoElement }
      { photoInfo }
      { photoDescription }
    </div>
  );
};
export default Photo;
