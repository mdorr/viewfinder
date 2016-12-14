import React from 'react';
import Photo from './../../photo/photo';

const FeedElements = ({ photos }) => {
  let feedElements = (
    <GetStartedElement />
  );

  if (photos && photos.length > 0) {
    feedElements = photos.map(function (photo) {
     return (
       <Photo key={ photo.id } data={ photo } />
     );
   });
  }
  return (<div className="feedContainer">{feedElements}</div>);
};

const GetStartedElement = () => {
  return (
    <div className="feedElement introduction">
      <h4>Welcome to viewfinder!</h4>
      <p>
        Glad to have you with us! This page is the feed. Here, you will see the photos you share with the community, and those shared by people you follow.
      </p>
      <p>
        To upload your first picture, click the "Upload" button in the top right corner.
      </p>
    </div>
  );
};


export default FeedElements;
