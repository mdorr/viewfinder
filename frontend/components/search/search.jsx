import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: this.props.location.query.search,
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <div className="searchPage">
        <div className="searchBar">
          <input className="searchInput" value={ this.state.search } onChange={ this.update('search') } />
        </div>
        { this.state.search }
      </div>
    );
  }
}

export default (Search);
