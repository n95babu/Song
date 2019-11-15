import React, { Component } from 'react'

export default class Input extends Component {
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
              <div className="rounded-pill">
                <div className="scrollable">
                  <h3>{song.artistName}</h3>
                  <p>{song.trackCensoredName}</p>
                  <p>{song.collectionViewUrl}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}



export default Input;
