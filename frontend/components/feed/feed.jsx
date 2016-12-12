import React from 'react';
import { Link } from 'react-router';
import Photo from './../photo/photo';


const Feed = ({ photos, currentUser }) => {

  let feedElements = (<div></div>);

  if (photos) {
    feedElements = photos.map(function (photo) {
      return (
        <div key={photo.id} className="feedElement">
          <div className="photo">
            <img src={ photo.url } />
          </div>
          <div className="photoInfo">
            { photo.username }
          </div>
          <div className="photoDescription">
            { photo.description }
          </div>
        </div>
      );
    });
  }

  return (
    <section className="feedPage">
      <div className="feedContainer">
        { feedElements }
      </div>
      <aside className="sideBar">
        <div className="userInfoBlock">
          User Info
        </div>
      </aside>
    </section>
  );
};

export default Feed;
