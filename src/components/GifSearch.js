import React from "react";

export default class GifSearch extends React.Component {
  state = { searchTerm: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
