// home.js
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
// import { Button } from "@material-ui/core";
import "./Game/snakeGame.css";

function Game() {
  const openGame = () => {
    window.open("/game", "_blank");
  };

  return (
    <div className="game">
      <h1>Games</h1>
      <p className="gameDescription">
        A simple snake game that will open in a new window for desktop browser.{" "}
        <br />
        Currently only playable on windows or android devices.
      </p>
      <button onClick={openGame} className="playGame">
        Play Snake Game
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game />);

export default Game;
