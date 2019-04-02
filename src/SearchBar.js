import React from "react";

export default class SearchBar extends React.Component {

  handleChange = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div>
        Search: <input id='search' placeholder='Remarks' onChange={this.handleChange}/>
      </div>
    );
  }
}
