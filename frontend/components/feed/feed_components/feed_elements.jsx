import React from 'react';
import PhotoContainer from './../../photo/photo_container';
import InfiniteLoader from 'react-infinite-loader';

const FeedElements = ({ photos, loader }) => {
  let feedElements = (
    <GetStartedElement />
  );

  if (photos && photos.length > 0) {
    feedElements = photos.map(function (photo) {
     return (
       <PhotoContainer key={ photo.id } id={ photo.id } />
     );
   });
  }

  let loaderStyle = { display: 'none' };

  return (
    <div className="feedContainer">
      {feedElements}
      <InfiniteLoader loaderStyle={ loaderStyle } onVisited={ () => loader() } />
    </div>
  );
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
