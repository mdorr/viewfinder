import React from 'react';
import PhotoContainer from './../photo/photo_container';

const SearchResults = ({ results }) => {
  let resultElements;

  if (results && results.photos && results.photos.length > 0) {
    resultElements = results.photos.map(function (photo) {
      return (
        <PhotoContainer key={ photo.id } id={ photo.id } imgOnly='true' />
      );
    });
  } else if (results && results.users && results.users.length > 0) {
    resultElements = results.users.map(function (user) {
      return (
        <div key={ user.id }>{ user.name }</div>
      );
    });
  }

  debugger

  return (
    <section className="userPhotos">
      { resultElements }
    </section>
  );
};

export default SearchResults;
