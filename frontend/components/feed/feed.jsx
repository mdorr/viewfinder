import React from 'react';
import { Link } from 'react-router';
import UserBadgeContainer from './../user_badge/user_badge_container';
import Loading from './../loading/loading';
import FeedElements from './feed_components/feed_elements';
import  * as lodash from 'lodash/array'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPhotos: []
    }
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.currentUser.id, new Date(), 3);
    this.props.fetchFeed(this.props.currentUser.id, new Date(), 4);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return; // early out if we don't need to update
    }
    let newPhotos = lodash.concat(this.state.loadedPhotos, nextProps.feed.photos);
    newPhotos = lodash.uniq(newPhotos); // TODO: Check if this actually works as intended - seems it does not filter out uniques. maybe skip lodash and write a loop for this
    this.setState({ loadedPhotos: newPhotos });
  }

  render() {
    const { feed, loading, currentUser } = this.props;
    if (loading || !currentUser ) {
      return <Loading />;
    }

    return (
      <section className="feedPage">
        <FeedElements photos={ this.state.loadedPhotos } />
        <aside className="sideBar">
          <div className="userInfoBlock">
            <div className="userNameBlock">
              <UserBadgeContainer user_id={ currentUser.id } badgeSize="40" fontSize="20" extraPadding="13" />
            </div>
            <div className="userStatsBlock group">
              <ul>
                <li><h4>{ currentUser.followers.length }</h4><br/>Followers</li>
                <li><h4>{ currentUser.photo_count }</h4><br/>Photos</li>
                <li><h4>{ currentUser.affection }</h4><br/>Affection</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    );
  }
}
export default Feed;
