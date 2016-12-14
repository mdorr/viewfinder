import React from 'react';
import { Link } from 'react-router';
import Loading from './../../loading/loading';

const UserPhotos = ({ userDetails, loading }) => {

  if (loading) {
    return <Loading />;
  }

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
