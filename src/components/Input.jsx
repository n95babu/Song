import React, { Component } from 'react';
import AudioPlayer from "react-h5-audio-player";

// const Player = () => (
//   <AudioPlayer
//     autoPlay
//     src="http://example.com/audio.mp3"
//     onPlay={e => console.log("onPlay")}
//     // other props here
//   />
// );

class Input extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className='Randinput'>
            <form onSubmit={
              this.props.handleSubmit
            }>
              <input className="input"
                value={this.props.userInput}
                onChange={this.props.handleChange}
                placeholder="Favorite Song"
              />&nbsp;
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
          <div className="scrollable-area">
            {this.props.songs.map(song => (
              //  key = {this.props.song.id}
              < div className="rounded-pill" >
                <div className="scrollable">
                  <h1>{song.trackCensoredName}</h1>
                  <p>{song.artistName}</p>
                  <AudioPlayer
                    src={song.previewUrl}
                  // onPlay={e => console.log("onPlay")}
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    )
  }
}



export default Input;
