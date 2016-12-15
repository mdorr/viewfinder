import React from 'react';
import PhotoContainer from './../../photo/photo_container';

const UserPhotos = ({ photos }) => {
  let photoElements = null;
  if (photos && photos.length > 0) {
    photoElements = photos.map(function (photo) {
      return (
        <PhotoContainer key={ photo.id } id={ photo.id } imgOnly='true' />
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
