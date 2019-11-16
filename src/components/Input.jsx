import React, { Component } from 'react';
import AudioPlayer from "react-h5-audio-player";

class Input extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className='Randinput'>
            <form onSubmit={
              this.props.handleSubmit
            }>
              <div className="active-purple-3 active-purple-4 mb-4">
                <input className="form-control"
                  value={this.props.userInput}
                  onChange={this.props.handleChange}
                  placeholder="What's your favorite song"
                />
              </div>
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
          <div className="scrollable-area">
            {this.props.songs.map(song => (
              <div key={song.id}>
                <h3>{song.trackCensoredName}</h3>
                <p>{song.artistName}</p>
                <AudioPlayer
                  src={song.previewUrl}
                  autoPlay
                />
              </div>
            ))}
          </div>
        </div>
      </div >
    )
  }
}



export default Input;
