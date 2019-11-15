import React, { Component } from 'react';
import { randomSongs } from '../services/api-helper';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      songs: [],
    };
  }

  componentDidMount = async () => {
    const data = await randomSongs(this.state.userInput);
    this.setState({
      songs: data
    });
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    });
  };


  render() {
    return (
      <div className="App Search">
        <h1>Hello from Search</h1>
      </div>
    )
  }
}



export default Search;