import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/feed_actions';
import Feed from './feed';

const mapStateToProps = ({ feed, session, loading }) => {
  return {
    feed,
    loading: loading.feedLoading, // TODO: Still required?
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (userId, maxId, amount) => dispatch(fetchFeed(userId, maxId, amount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
