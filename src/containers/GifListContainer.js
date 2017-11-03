import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const API_KEY = "";
const URL = `http://api.giphy.com/v1/gifs/search?q=`;

export default class GifListContainer extends React.Component {
  state = { gifs: [] };

  fetchGifs = term => {
    fetch(`${URL}${term}&api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(json => {
        const gifs = json.data.slice(0, 3);
        this.setState({ gifs });
      });
  };

  handleSearch = term => {
    this.fetchGifs(term);
  };
  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
