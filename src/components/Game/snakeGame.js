import React from "react";
import Tile from "./tile";
import "./snakeGame.css";

let tcount = 0;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMatrix: [],
      snakeList: [
        [1, 1],
        [1, 2],
        [2, 2],
      ],
      increment: [1, 0], // fixed typo
      gameOver: false,
      food: [15, 15],
      isFoodVisable: true,
    };
  }

  generateFood = () => {
    return [parseInt(Math.random() * 18), parseInt(Math.random() * 18)];
  };

  gameTick = () => {
    let body = [];
    this.state.snakeList.map((i) => body.push(i));
    tcount = (tcount + 1) % 40;
    let newInc = this.state.increment; // fixed typo
    let newx = this.state.snakeList[0][0] + newInc[0];
    let newy = this.state.snakeList[0][1] + newInc[1];
    if (newx < 0) newx += 19;
    if (newx > 18) newx -= 19;
    if (newy < 0) newy += 19;
    if (newy > 18) newy -= 19;
    body.unshift([newx, newy]);

    let newx2 = this.state.snakeList[0][0] + newInc[0];
    let newy2 = this.state.snakeList[0][1] + newInc[1];
    if (newx2 < 0) newx2 += 19;
    if (newx2 > 18) newx2 -= 19;
    if (newy2 < 0) newy2 += 19;
    if (newy2 > 18) newy2 -= 19;
    if (
      this.state.snakeList.filter((i) => {
        return i[0] === newx2 && i[1] === newy2; // fixed typo
      }).length
    )
      this.setState({ gameOver: true });
    else {
      let food = this.state.food;
      let ifv = this.state.isFoodVisable;
      if (tcount === 39) {
        food = this.generateFood(); // added parentheses
        ifv = true;
      }
      if (!(body[0][0] === food[0] && body[0][1] === food[1])) body.pop();
      else ifv = false;
      this.setState({ snakeList: body, food: food, isFoodVisable: ifv });
    }
  };

  componentDidMount() {
    window.fnInterval = setInterval(this.gameTick, 100);
    const keyboard = document.querySelector("body");
    keyboard.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    clearInterval(window.fnInterval);
    const keyboard = document.querySelector("body");
    keyboard.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    let newInc = this.state.increment; 
    if (e.key === "ArrowUp" || e.key === "w") newInc = [-1, 0]; // Up
    else if (e.key === "ArrowDown" || e.key === "s") newInc = [1, 0]; // Down
    else if (e.key === "ArrowLeft" || e.key === "a") newInc = [0, -1]; // Left
    else if (e.key === "ArrowRight" || e.key === "d") newInc = [0, 1]; // Right
    if (
      newInc[0] + this.state.increment[0] === 0 &&
      newInc[1] + this.state.increment[1] === 0
    )
      return;
    this.setState((prevState) => ({ increment: newInc }));
  };

  static getDerivedStateFromProps(props, state) {
    let temp = [];
    // changed for loop to for...of loop
    for (let i of state.snakeList) {
      temp[i[0]] = temp[i[0]] || [];
      temp[i[0]][i[1]] = true;
    }
    return { gameMatrix: temp };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          {this.state.gameMatrix.map((i, index) => (
            <div className="board-row" key={index}>
              {i.map((j, index) => (
                <Tile value={j} key={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
