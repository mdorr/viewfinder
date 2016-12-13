import React from 'react';
import { Link } from 'react-router';
import Photo from './../photo/photo';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.fetchFeed = this.props.fetchFeed.bind(this);
  }

  componentDidMount() {
    this.fetchFeed(this.props.currentUser.id);
  }

  render() {
    let feedPhotos = this.props.feed.photos;

    let feedElements = feedPhotos.map(function (photo) {
      return (
        <div key={photo.id} className="feedElement">
          <div className="photo">
            <img src={ photo.image_url } />
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

    return (
      <section className="feedPage">
        <div className="feedContainer">
          { feedElements }
        </div>
        <aside className="sideBar">
          <div className="userInfoBlock">
            { this.props.currentUser.readableUserName }
          </div>
        </aside>
      </section>
    );
  }
}
export default Feed;
