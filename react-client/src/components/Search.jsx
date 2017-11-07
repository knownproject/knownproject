import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  // alter this to work with data
  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button></button>
       </div>
    );
  }
}


export default Search;