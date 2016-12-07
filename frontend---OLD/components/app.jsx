import React from 'react';
import PageHeaderContainer from './page_header/page_header_container';

const App = ({ children }) => (
  <div>
    <PageHeaderContainer />
    { children }
  </div>
);

export default App;
