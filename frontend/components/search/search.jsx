import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.switchCategories = this.switchCategories.bind(this);

    this.state = {
      search: this.props.location.query.search,
      category: "Photos"
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentWillMount () {
    this.handleSearch();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.category != this.state.category) {
      this.props.clearSearchResults();
    }

    if (nextState.search != this.state.search) {
      this.props.router.push({
        pathname: "/search", query: { search: nextState.search }
      });
      if (nextState.search.length > 2) {
        this.props.newSearch( nextState.search, nextState.category );
      }
    }

  }

  handleSearch () {
    if (this.props.router.location.query.search != this.state.search) {
      this.props.router.push({
        pathname: "/search",
        query: { search: this.state.search }
      });
    }
    if (this.state.search.length > 2) {
      this.props.newSearch( this.state.search, this.state.category );
    }
  }

  switchCategories () {
    if (this.state.category === "Photos")
      this.setState({ category: "Users" });
    else {
      this.setState({ category: "Photos" });
    }
  }

  render() {
    return (
      <div className="searchPage">
        <div className="searchBar">
          <input className="searchInput" value={ this.state.search } onChange={ this.update('search') } placeholder="Enter search terms here, p.e. 'Italy'" />
          <button onClick={ this.handleSearch } className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
          <div onClick={ this.switchCategories } className="searchCategories">
            { this.state.category }
            &nbsp;
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
        <SearchResults results={ this.props.results } />
      </div>
    );
  }
}

export default (Search);
