import React from 'react';
import { Link } from 'react-router';

const UserAbout = ({ userDetails }) => {
  return (
    <section className="userAbout">
      <h3>Biography</h3>
      <p>{ userDetails.details.description }</p>
    </section>
  );
};

export default UserAbout;
