// home.js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import "./Game/snakeGame.css";

function Home(props) {
  
    const openGame = () => {
      window.open('/game', '_blank'); 
    };

  return (
    <div className="game">
      <h1>Games</h1>
      <p className="gameDescription">
        A simple snake game that will open in a new window for desktop browser.
      </p><button onClick={openGame}>
        Play Snake Game
      </button>
    </div>
  );
}

ReactDOM.render(<Button />, document.getElementById("root"));

export default Home;

