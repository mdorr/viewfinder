import React from 'react';
import { Link } from 'react-router';

const UserAbout = ({ userDetails }) => {
  return (
    <section className="userDescription">
      <div className="Biography">
        { userDetails.details.description }
      </div>
    </section>
  );
};

export default UserAbout;
