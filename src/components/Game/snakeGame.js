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
  const [score, setScore] = useState(0); 

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

  function gameOver(){
    setSnake(initialSnakePosition)
    setScore(0)
  }

  function updateGame() {

    if(
  snake[0].x < 0 || 
  snake[0].x > 20 || 
  snake[0].y < 0 || 
  snake[0].y > 20
  ){ // <-- add a closing parenthesis here
  gameOver()
    return
  }
    let isBit = snake.slice(1).some((ele) => ele.x === snake[0].x && ele.y === snake[0].y);

    if(isBit){
      gameOver()
      return
    }

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
    let isAteFood = newSnake[0].x === food.x && newSnake[0].y === food.y;

    if(isAteFood){
      setScore((prev) => prev + 1);
      renderFood();
    } else {
      newSnake.pop()
    }

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

  function renderFood(){
    let xPosition = Math.floor(Math.random() * totalGridSize);
    let yPosition = Math.floor(Math.random() * totalGridSize);

    setFood({ x: xPosition, y: yPosition })
  }

  useEffect(() => {
    let interval = setInterval(updateGame, 350); // snake speed 
    return () => clearInterval(interval, updateGame);
  });


   useEffect(() => {
        document.addEventListener("keydown", updateDirection);
        return () => clearInterval("keydown", updateDirection); // this line for better performance
    });

  return (
    <div className="container">
      <div className="score">
        Score : <span>{score}</span>
      </div>
      <div className="board">{renderBoard()}</div>
    </div>
  );
}
