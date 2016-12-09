import React from 'react';
import { Link } from 'react-router';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        This is the picture feed.
        { this.props.children }
      </section>
    );
  }
}

export default Feed;
