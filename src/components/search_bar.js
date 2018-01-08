import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onInputChange = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input placeholder="Search..."value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
