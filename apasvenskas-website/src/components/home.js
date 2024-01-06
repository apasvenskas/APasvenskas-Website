// home.js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import Game from "./Game/snakeGame";
import "./Game/snakeGame.css";
import NewWindow from "react-new-window";
// import styles from './home.module.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGame: false,
    };
  }

  // toggle the game visibility
  handleClick = () => {
    this.setState((prevState) => ({
      showGame: !prevState.showGame,
    }));
  };

  render() {
    return (
      <div className="game">
        <h1>Games</h1>
        <p className="gameDescription">A simple snake game that will open in a new window for desktop browser.</p>
        <button className="snakeGame" onClick={this.handleClick}>Play Snake Game</button>
        {this.state.showGame && (
          <NewWindow>
            <Game />
          </NewWindow>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById("root"));

export default Home;