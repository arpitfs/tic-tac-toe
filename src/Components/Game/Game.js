import React from 'react';
import Board from '../Board/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
    };
  }
    render() {
      if(!this.state.isStart)
      {
        return (
            <button className="enter-button" onClick={() => this.setState({ isStart: true })}>Enter the game</button>
        );
      }
      else
      {
        return (
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        );
      }
      
    }
  }

export default Game;