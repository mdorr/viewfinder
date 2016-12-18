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
    this.checkIfUserIsFollowed(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfUserIsFollowed(nextProps);
  }

  checkIfUserIsFollowed (propsToCheck) {
    let isFollowed = false;
    propsToCheck.curUser.followed.forEach((el) => {
      if (el.id == propsToCheck.followUserId) { isFollowed = true; }
    });

    // only update state if required
    if (this.state.followed != isFollowed) {
      this.setState({ followed: isFollowed });
    }
  }

  followUser () {
		let followData = {
			follow: {
				following_user_id: this.props.curUser.id,
				followed_user_id: this.props.followUserId
			}
		};
		this.props.follow(followData);
	}

	unfollowUser () {
		let unfollowData = {
			follow: {
				following_user_id: this.props.curUser.id,
				followed_user_id: this.props.followUserId
			}
		};
		this.props.unfollow(unfollowData);
	}

  render () {
    if (this.state.followed) {
			return (<button onClick={this.unfollowUser}  className="profileButton">Unfollow</button>);
		} else {
			return (<button onClick={this.followUser}  className="profileButton">Follow</button>);
		}
  }
}

export default Follow;
