import React from 'react';

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
          <button onClick={ this.handleSearch } className="searchButton">go</button>
          <div onClick={ this.switchCategories } className="searchCategories">
            { this.state.category }
          </div>
        </div>
        { this.state.search }
      </div>
    );
  }
}

export default (Search);
