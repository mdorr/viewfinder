import React from 'react';

const Home = ({ children }) => (
  <div>
    <img className="mainLogo" src = "assets/vf-logo.png" />
    { children }
  </div>
);

export default Home;
