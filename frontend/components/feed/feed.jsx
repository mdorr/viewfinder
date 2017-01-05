import React from 'react';
import { Link } from 'react-router';
import UserBadgeContainer from './../user_badge/user_badge_container';
import Loading from './../loading/loading';
import FeedElements from './feed_components/feed_elements';
import PhotoContainer from './../photo/photo_container';
import InfiniteLoader from 'react-infinite-loader';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPhotos: []
    };
    this.loadPhotos = this.loadPhotos.bind(this);
    this.oldestLoadedPhotoId = this.oldestLoadedPhotoId.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.currentUser.id, this.oldestLoadedPhotoId(), 3);
  }

  loadPhotos() {
    this.props.fetchFeed(this.props.currentUser.id, this.oldestLoadedPhotoId(), 3);
  }

  oldestLoadedPhotoId () {
    if (this.state.loadedPhotos.length > 0) {
      let oldestPhotoId = undefined;
      this.state.loadedPhotos.forEach((el) => {
        if (!oldestPhotoId || el.id < oldestPhotoId) {
          oldestPhotoId = el.id;
        }
      });
      return oldestPhotoId ? oldestPhotoId : 0;
    } else {
      return 0;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return; // early out if we don't need to update
    }

    let newPhotos = this.state.loadedPhotos;

    for (let i = 0; i < nextProps.feed.photos.length; i++) {
      let newPhotoId = nextProps.feed.photos[i].id;
      let duplicate = false;
      for (let k = 0; k < newPhotos.length; k++) {
          if (newPhotos[k].id === newPhotoId) {
            duplicate = true;
            break;
          }
      }
      if (!duplicate) {
        newPhotos.push(nextProps.feed.photos[i]);
      }
    }
    this.setState({ loadedPhotos: newPhotos });
  }

  renderFeedElements() {
    let feedElements = this.state.loadedPhotos.map(function (photo) {
      return (
        <PhotoContainer key={ photo.id } id={ photo.id } />
      );
    });
    return feedElements;
  }

  render() {
    const { currentUser } = this.props;
    if ( this.state.loadedPhotos.length === 0 || !currentUser ) {
      return <Loading />;
    }

    return (
      <section className="feedPage">
        <div className="feedContainer">
          <FeedElements photos={ this.state.loadedPhotos } loader={ this.loadPhotos } />
        </div>

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
