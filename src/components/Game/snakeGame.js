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
        // check if snake is defined and not empty
        let isSnake = snake && snake.length > 0 && snake.some((ele) => ele.x === row && ele.y === col);
        // check if snake is defined and not empty
        let isSnakeHead = snake && snake.length > 0 && snake[0].x === row && snake[0].y === col;

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
  ){ 
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
      default: 
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
         default:
            console.error("Invalid code: " + code);
            break;
    }
}

  function renderFood(){
    let xPosition = Math.floor(Math.random() * totalGridSize);
    let yPosition = Math.floor(Math.random() * totalGridSize);

    setFood({ x: xPosition, y: yPosition })
  }

   useEffect(() => {
        document.addEventListener("keydown", updateDirection);
        return () => clearInterval("keydown", updateDirection); 
    });

    useEffect(() => {
      let interval = setInterval(() => {
        updateGame(); // this function sets x and y
        // this function runs after updateGame is done
        let x = snake[0].x;
        let y = snake[0].y;
        console.log(x); 
        console.log(y); // the latest value of y
      }, 400); // snake speed 
      return () => clearInterval(interval);
    });
    

  return (
    <div className="container">
      <h3>To play the following game scroll down. For PC/MAC preferably use keyboard arrows. For portable devices such as phones tablest there is a keypad at the bottom of the page that can be used for controling the snake.</h3>
      <div className="score">
        <span>Score:{score}</span>
      </div>
      <div className="board">{renderBoard()}</div>
      <footer>
      <div className="keypad">
      <button id="up" onClick={() => setDirection("UP")}>
          UP
        </button>
        <div className="leftRight">
        <button id="left" onClick={() => setDirection("LEFT")}>
          LEFT
        </button>
        <button id="right" onClick={() => setDirection("RIGHT")}>
          RIGHT
        </button>
        </div>
        <button id="down" onClick={() => setDirection("DOWN")}>
          DOWN
        </button>
      </div>
      </footer>
    </div>
  );
}
