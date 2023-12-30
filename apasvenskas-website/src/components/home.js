// home.js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import  Game  from "./Game/snakeGame"; // Use the curly braces to import the named export
// import styles from './home.module.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGame: false // initially hide the game
    };
  }

  // toggle the game visibility
  handleClick = () => {
    this.setState((prevState) => ({
      showGame: !prevState.showGame
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Play Snake Game</button>
        {this.state.showGame && <Game />} 
      </div>
    );
  }
}

// render the button component to the root element
ReactDOM.render(<Button />, document.getElementById("root"));

// export the button component as default
export default Home;


  
      
