import React from 'react';
import { Link } from 'react-router';

const UserPhotos = ({ userDetails }) => {

  let photoElements = (<p>No photos have been uploaded yet.</p>);
  let photos = userDetails.photos;

  if (photos && photos.length > 0) {
    photoElements = photos.map(function (photo) {
      return (
        <div key={photo.id} className="userPhoto">
          <img src={ photo.image_url } />
        </div>
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
