import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.isLiked = this.isLiked.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      liked: undefined,
      pending: undefined,
      num_likes: 0
    };
  }

  componentWillMount () {
    const likeData = {
      like: {
        photo_id: this.props.photo_id,
        user_id: this.props.currentUserId
      }
    };

    this.props.getState(likeData).then(
      this.isLiked(this.props)
    );
  }

  componentWillReceiveProps (nextProps) {
    this.isLiked(nextProps);
  }

  isLiked (props) {
    let likeData = props.likes[this.props.photo_id];
    if (likeData) {
      let newState = {
        pending: likeData.pending,
        liked: likeData.liked,
        num_likes: likeData.num_likes
      };

      if (newState != this.state) {
        this.setState(newState);
      }
    }
  }

  handleButton () {
    const likeData = {
      like: {
        photo_id: this.props.photo_id,
        user_id: this.props.currentUserId
      }
    };

    if (this.state.liked) {
      this.props.unlikePhoto(likeData);
    } else {
      this.props.likePhoto(likeData);
    }
  }

  render () {
    if (this.state.pending) {
      return (
        <button className="likeButton pending">
          <i className="fa fa-spinner fa-spin fa-fw"></i>
        </button>
      );
    } else if (this.state.liked) {
      return (
        <button onClick={this.handleButton} className="likeButton liked">
          <i className="fa fa-heart" aria-hidden="true"></i> {this.state.num_likes}
        </button>
      );
    } else {
      return (
        <button onClick={this.handleButton} className="likeButton">
          <i className="fa fa-heart-o" aria-hidden="true"></i> {this.state.num_likes}
        </button>
      );
    }
  }

}
export default Like;
