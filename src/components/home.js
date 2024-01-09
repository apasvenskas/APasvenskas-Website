// home.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import Game from "./Game/snakeGame";
import "./Game/snakeGame.css";
import NewWindow from "react-new-window";

function Home(props) {
  const [showGame, setShowGame] = useState(false);

  const handleClick = () => {
    setShowGame((prevState) => !prevState);
  };

  return (
    <div className="game">
      <h1>Games</h1>
      <p className="gameDescription">
        A simple snake game that will open in a new window for desktop browser.
      </p>
      <button className="snakeGame" onClick={handleClick}>
        Play Snake Game
      </button>
      {showGame && (
        <a href="/Game/snakeGame" target="_blank" rel="noopener noreferrer">
          <Game />
        </a>
      )}
    </div>
  );
}
ReactDOM.render(<Button />, document.getElementById("root"));

export default Home;

