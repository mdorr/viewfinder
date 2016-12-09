import React from 'react';
import PageHeaderContainer from './page_header/page_header_container';
import GreetingPageContainer from './greeting/greeting_page_container';
import { Link } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    if (this.props.children) {
      return (
        <div>
          <header>
            <PageHeaderContainer />
          </header>
          { this.props.children }
        </div>
      );
    } else {
      return (
        <page>
          <header>
            <PageHeaderContainer />
          </header>
          <GreetingPageContainer />
        </page>
      );
    }
  }
}

export default App;
