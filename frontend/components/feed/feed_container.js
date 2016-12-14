import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/feed_actions';
import Feed from './feed';

const mapStateToProps = ({ feed, session, loading }) => {
  return {
    feed,
    loading: loading.indexLoading,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: userId => dispatch(fetchFeed(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
