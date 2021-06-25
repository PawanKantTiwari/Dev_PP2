import React, { Component } from "react";
import Header from "./components/Header/Header.jsx";
import Movies from "./components/Movies/Movies.jsx";
import axios from "axios";
import { API_KEY, API_URL } from "./api/secrets"

class App extends Component {
  state = {
    moviesData: [],
    currentMovie: "Batman",
  };

  componentDidMount() {

    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: this.state.currentMovie }
    }).then((data) => {
      let moviesData = data.data.results;
      this.setState({moviesData : moviesData})
    });

  }

  render() {
    return (<div className="App">
      <Header></Header>
      <Movies movies={this.state.moviesData}></Movies>
    </div>);
  }
}

export default App;