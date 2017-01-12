import React from 'react';
import PhotoContainer from './../photo/photo_container';
import UserMini from './../user/user_mini';

const SearchResults = ({ results }) => {
  let resultElements;

  if (results && results.photos && results.photos.length > 0) {
    resultElements = results.photos.map(function (photo) {
      return (
        <PhotoContainer key={ photo.id } id={ photo.id } imgOnly='true' />
      );
    });
    return (
      <section className="searchResults searchResultsPhotos">
        { resultElements }
      </section>
    );
  } else if (results && results.users && results.users.length > 0) {
    resultElements = results.users.map(function (user) {
      return (
        <UserMini key={ user.id } user={ user } />
      );
    });
    return (
      <section className="searchResults searchResultsUsers">
        { resultElements }
      </section>
    );
  }

  return (
    <section className="searchResults">
      <div className="noSearchResults">
        Sorry, we could not find any matches.
      </div>
    </section>
  );
};

export default SearchResults;
