import React from "react";
import { useState, useEffect } from "react";
import './snakeGame.css'; 

export default function Game() {
  let totalGridSize = 20;

  let initialSnakePosition = [
    { x: totalGridSize / 2, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 1, y: totalGridSize / 2 },
  ];
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [snake, setSnake] = useState(initialSnakePosition);
  const [direction, setDirection] = useState("LEFT");

  function renderBoard() {
    let cellArray = [];
    for (let row = 0; row < totalGridSize; row++) {
      for (let col = 0; col < totalGridSize; col++) {
        let className = "cell";
        let isFood = food.x === row && food.y === col;
        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);
        let isSnakeHead = snake[0].x === row && snake[0].y === col;

        if (isFood) {
          className = className + " food";
        }
        if (isSnake) {
          className = className + " snake";
        }
        if (isSnakeHead) {
          className = className + " snakeHead";
        }
        let cell = <div className={className} key={`${row} - ${col}`}></div>;
        cellArray.push(cell);
      }
    }
    return cellArray;
  }

  function updateGame() {
    let newSnake = [...snake];
    switch (direction) {
      case "LEFT":
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y - 1 });
        break;
      case "RIGHT":
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y + 1 });
        break;
      case "UP":
        newSnake.unshift({ x: newSnake[0].x - 1, y: newSnake[0].y });
        break;
      case "DOWN":
        newSnake.unshift({ x: newSnake[0].x + 1, y: newSnake[0].y });
        break;
      default: //can active defaultto get rid of the warning
     // do nothing
    }
    newSnake.pop();
    setSnake(newSnake);
  }

  function updateDirection (e){
    let code = e.code;
    switch(code){
        case "ArrowUp":
            if(direction !== "DOWN") setDirection("UP");
            e.preventDefault();
            break;
        case "ArrowDown":
            if(direction !== "UP") setDirection("DOWN");
            e.preventDefault();
            break;
         case "ArrowLeft":
            if(direction !== "RIGHT") setDirection("LEFT");
            e.preventDefault();
            break;
         case "ArrowRight":
            if(direction !== "LEFT") setDirection("RIGHT");
            e.preventDefault();
            break;
        //  default:
        //     console.error("Invalid code: " + code);
        //     break;
    }
}

  useEffect(() => {
    let interval = setInterval(updateGame, 500);
    return () => clearInterval(interval, updateGame);
  });

   useEffect(() => {
        document.addEventListener("keydown", updateDirection);
        return () => clearInterval("keydown", updateDirection);
    });

  return (
    <div className="container">
      <div className="score">
        Score : <span>30</span>
      </div>
      <div className="board">{renderBoard()}</div>
    </div>
  );
}
