import React from 'react';
import PageHeaderContainer from './../page_header/page_header_container';
import GreetingPageContainer from './../greeting/greeting_page_container';
import FeedContainer from './../feed/feed_container';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <PageHeaderContainer />
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
