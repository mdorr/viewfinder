import React from 'react';
import { Link } from 'react-router';

const UserPhotos = ({ userDetails }) => {

  let feedElements = (<div></div>);
  let photos = userDetails.photos;


  if (photos) {
    feedElements = photos.map(function (photo) {
      return (
        <div key={photo.id} className="userPhoto">
          <img src={ photo.image_url } />
        </div>
      );
    });
  }

  return (
    <section className="userPhotos">
      { feedElements }
    </section>
  );
};

export default UserPhotos;
