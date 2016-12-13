import React from 'react';
import { Link } from 'react-router';
import Photo from './../photo/photo';
import UserBadge from "./../user_badge/user_badge";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    //this.fetchFeed = this.props.fetchFeed.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.currentUser.id);
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
              <ul>
                <li>
                  <UserBadge url={currentUser.profile_picture } size="40" />
                </li>
                <li><p>{ currentUser.readableUserName }</p></li>
              </ul>
            </div>
            <div className="userStatsBlock group">
              <ul>
                <li><h4>{ currentUser.followers.length }</h4><br/>followers</li>
                <li><h4>x</h4><br/>photos</li>
                <li><h4>x</h4><br/>affection</li>
              </ul>
            </div>
          </div>

        </aside>
      </section>
    );
  }
}
export default Feed;
