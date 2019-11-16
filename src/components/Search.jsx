import React, { Component } from 'react';
import { randomSongs } from '../services/api-helper';
import Input from './Input';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      songs: [],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const Ran = await randomSongs(this.state.userInput)
    this.setState({
      songs: Ran
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
        <div>
          <Input
            userInput={this.state.userInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            songs={this.state.songs}
          />
        </div>
      </div>
    )
  }
}



export default Search;