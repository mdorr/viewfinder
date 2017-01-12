import { connect } from 'react-redux';
import { newSearch, clearSearchResults } from '../../actions/search_actions';
import Search from './search';


const mapStateToProps = ({ search }) => {
  return {
    results: search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newSearch: (term, category) => dispatch(newSearch(term, category)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
