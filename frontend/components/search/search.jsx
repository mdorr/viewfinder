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

  handleSearch () {
    this.props.newSearch( this.state.search, this.state.category );
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
          <input className="searchInput" value={ this.state.search } onChange={ this.update('search') } />
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
