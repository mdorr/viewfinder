import React from 'react';


class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followed: false,
    };
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.checkIfUserIsFollowed = this.checkIfUserIsFollowed.bind(this);
  }

  componentWillMount () {
    this.checkIfUserIsFollowed(this.props.followingCurrentUser, this.props.userToFollowId);
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfUserIsFollowed(nextProps.followingCurrentUser, nextProps.userToFollowId);
  }

  checkIfUserIsFollowed (currentUserIsFollowing, userToFollowId) {
    let isFollowed = false;

    currentUserIsFollowing.forEach((el) => {
      if (el.id == userToFollowId) {
        isFollowed = true;
      }
    });

    // only update state if required
    if (this.followed != isFollowed) {
      this.setState({ followed: isFollowed });
    }
  }

  followUser () {
		let follow = {
			follow: {
				following_user_id: this.props.currentUserId,
				followed_user_id: this.props.userToFollowId
			}
		};
		this.props.follow(follow);
	}

	unfollowUser () {
		let unfollow = {
			follow: {
				following_user_id: this.props.currentUserId,
				followed_user_id: this.props.userToFollowId
			}
		};
		this.props.unfollow(unfollow);
	}

  render () {
    			// TODO: Colors: Blue when not followed, Green when followed, red hover to unfollow
    if (this.state.followed) {
			return (<button onClick={this.unfollowUser}  className="profileButton">Unfollow</button>);
		} else {
			return (<button onClick={this.followUser}  className="profileButton">Follow</button>);
		}
  }
}

export default Follow;
