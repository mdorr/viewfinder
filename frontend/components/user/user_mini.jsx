import React from 'react';
import { Link } from 'react-router';

const UserMini = ({ user }) => {
  let coverImage = {
    display: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${ user.cover_image_url })`,
  };

  let profilePicture = {
    backgroundSize: '60px 60px',
    backgroundPosition: 'center center',
    backgroundImage: `url(${ user.profile_picture_url })`
  };

  return (
    <Link to={ `/user/${ user.id }`}>
      <div className="userMiniContainer">
        <div className="userMiniCover" style={ coverImage }>
        </div>
        <div className="userMiniProfilePicture" style={ profilePicture }>
        </div>
        <div className="userMiniDetails">
          <h1>{ user.name }</h1>
          <h2>{ user.followers } Followers</h2>
        </div>
      </div>
    </Link>
  );
};

export default UserMini;
