import React from 'react';
import { Link } from 'react-router';

const UserPhotos = ({ userDetails, loading }) => {
  // TODO: Loading indicator & Actions
  let photoElements;
  let photos = userDetails.photos;

  if (photos && photos.length > 0) {
    photoElements = photos.map(function (photo) {
      return (
        <img key={photo.id} className="userPhoto" src={ photo.image_url } />
      );
    });
  }

  return (
    <section className="userPhotos">
      { photoElements }
    </section>
  );
};

export default UserPhotos;
