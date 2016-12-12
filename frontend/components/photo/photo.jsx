import React from 'react';

const Photo = ({ photoData }) => (
  <div className="feedElement">
    <div className="photo">
      <img src="{ photoData.photo.picture.url }"></img>
    </div>
    <div className="photoInfo">
      { photoData.user.username }
    </div>
    <div className="photoDescription">
      { photoData.description }
    </div>
  </div>
);

export default Photo;
