import React from 'react';

const UserBadge = ({ url, size }) => {
  let badgePicture = {
    backgroundSize: `${parseInt(size)}px ${parseInt(size)}px`,
    backgroundImage: `url(${url})`,
    display: 'inline-block',
    width: `${parseInt(size)}px`,
    height: `${parseInt(size)}px`,
    border: '2px solid #fff',
    borderRadius: '50%'
  };

  return (
    <div style={badgePicture}> </div>
  );
};

export default UserBadge;
