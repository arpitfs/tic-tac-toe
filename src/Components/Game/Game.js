import React from 'react';
import Board from '../Board/Board';
import NavBar from '../NavBar/NavBar';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
    };
  }
  render() {
    if (!this.state.isStart) {
      return (
        <div>
          <NavBar />
          <button className="enter-button" onClick={() => this.setState({ isStart: true })}>Enter the game</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <NavBar />
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Game;