import React from 'react';
import Photo from './../../photo/photo';

const FeedElements = ({ photos }) => {
  let feedElements = photos.map(function (photo) {
    return (
      <Photo key={ photo.id } data={ photo } />
    );
  });

  return (<div className="feedContainer">{feedElements}</div>);
};

export default FeedElements;
