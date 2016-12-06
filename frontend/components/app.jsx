import React from 'react';

const App = ({ children }) => (
  <div>
    <img className="mainLogo" src = "assets/vf-logo.png" />
    { children }
  </div>
);

export default App;
