import React from 'react';
import { Link } from 'react-router';
import Photo from './../photo/photo';
import UserBadge from './../user_badge/user_badge';
import Loading from './../loading/loading';
import FeedElements from './feed_components/feed_elements';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.currentUser.id);
  }

  render() {
    const { feed, loading, currentUser } = this.props;

    if (loading || !currentUser) {
      return (<div><Loading /></div>);
    }
  //  debugger

    return (
      <section className="feedPage">
        <FeedElements photos={ feed.photos } />
        <aside className="sideBar">
          <div className="userInfoBlock">
            <div className="userNameBlock">
              <UserBadge user={currentUser} badgeSize="40" fontSize="20" extraPadding="13" />
            </div>
            <div className="userStatsBlock group">
              <ul>
                <li><h4>{ currentUser.followers.length }</h4><br/>followers</li>
                <li><h4>{ currentUser.photo_count }</h4><br/>photos</li>
                <li><h4>0</h4><br/>affection</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    );
  }
}
export default Feed;
