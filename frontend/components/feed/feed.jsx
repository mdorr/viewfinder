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
    let currentUser = this.props.currentUser;
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
            <div className="userNameBlock">
              { currentUser.readableUserName }
            </div>
            <div className="userStatsBlock">
              <ul>
                <li><h4>{ currentUser.followers.length }</h4><br/>followers</li>
              </ul>
            </div>
          </div>

        </aside>
      </section>
    );
  }
}
export default Feed;
