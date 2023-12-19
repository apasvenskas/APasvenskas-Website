import React, { useState, useEffect, useRef } from "react";
import { Button, Menu } from "@material-ui/core";
// import "./App.css";

// The size of each cell in the grid
const CELL_SIZE = 20;

// The initial position and direction of the snake
const INITIAL_SNAKE = [
  { x: 0, y: 0, dir: "RIGHT" },
  { x: -1, y: 0, dir: "RIGHT" },
];

// The initial position of the food
const INITIAL_FOOD = { x: 10, y: 10 };

// The initial score
const INITIAL_SCORE = 0;

// The initial game state
const INITIAL_STATE = {
  snake: INITIAL_SNAKE,
  food: INITIAL_FOOD,
  score: INITIAL_SCORE,
  gameOver: false,
};

// A custom hook to use an interval
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// The main app component
export function Home() {
  // The state of the game
  const [state, setState] = useState(INITIAL_STATE);

  // The speed of the game
  const [speed, setSpeed] = useState(200);

  // The handler for key press events
  const handleKeyPress = (e) => {
    e.preventDefault();
    const { snake } = state;
    const head = snake[0];
    const newDir = e.key.replace("Arrow", "").toUpperCase();
    // Change the direction of the snake head if it is not opposite to the current direction
    if (
      (newDir === "UP" && head.dir !== "DOWN") ||
      (newDir === "DOWN" && head.dir !== "UP") ||
      (newDir === "LEFT" && head.dir !== "RIGHT") ||
      (newDir === "RIGHT" && head.dir !== "LEFT")
    ) {
      setState((prevState) => ({
        ...prevState,
        snake: [{ ...head, dir: newDir }, ...snake.slice(1)],
      }));
    }
  };

  // The handler for button click events
  const handleClick = (dir) => {
    const { snake } = state;
    const head = snake[0];
    // Change the direction of the snake head if it is not opposite to the current direction
    if (
      (dir === "UP" && head.dir !== "DOWN") ||
      (dir === "DOWN" && head.dir !== "UP") ||
      (dir === "LEFT" && head.dir !== "RIGHT") ||
      (dir === "RIGHT" && head.dir !== "LEFT")
    ) {
      setState((prevState) => ({
        ...prevState,
        snake: [{ ...head, dir }, ...snake.slice(1)],
      }));
    }
  };

  // The function to move the snake
  const moveSnake = () => {
    const { snake, food, score } = state;
    const head = snake[0];
    let newHead;
    // Calculate the new position of the snake head based on its direction
    switch (head.dir) {
      case "UP":
        newHead = { x: head.x, y: head.y - 1, dir: head.dir };
        break;
      case "DOWN":
        newHead = { x: head.x, y: head.y + 1, dir: head.dir };
        break;
      case "LEFT":
        newHead = { x: head.x - 1, y: head.y, dir: head.dir };
        break;
      case "RIGHT":
        newHead = { x: head.x + 1, y: head.y, dir: head.dir };
        break;
      default:
        newHead = head;
    }
    // Check if the snake eats the food
    let newFood = food;
    let newScore = score;
    let newSpeed = speed;
    if (newHead.x === food.x && newHead.y === food.y) {
      // Generate a new food at a random position
      newFood = {
        x: Math.floor(Math.random() * (window.innerWidth / CELL_SIZE)),
        y: Math.floor(Math.random() * (window.innerHeight / CELL_SIZE)),
      };
      // Increase the score and the speed
      newScore++;
      newSpeed -= 10;
    } else {
      // Remove the last segment of the snake
      snake.pop();
    }
    // Add the new head to the snake
    snake.unshift(newHead);
    // Update the state
    setState((prevState) => ({
      ...prevState,
      snake,
      food: newFood,
      score: newScore,
    }));
    // Update the speed
    setSpeed(newSpeed);
  };

  // The function to check if the snake is out of bounds
  const checkOutOfBounds = () => {
    const { snake } = state;
    const head = snake[0];
    // Check if the snake head is outside the window
    if (
      head.x < 0 ||
      head.x >= window.innerWidth / CELL_SIZE ||
      head.y < 0 ||
      head.y >= window.innerHeight / CELL_SIZE
    ) {
      return true;
    }
    return false;
  };

  // The function to check if the snake has collapsed
  const checkCollapsed = () => {
    const { snake } = state;
    const head = snake[0];
    // Check if the snake head is overlapping with any of its body segments
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  };

  // The function to check if the game is over
  const checkGameOver = () => {
    if (checkOutOfBounds() || checkCollapsed()) {
      // Set the game over flag to true
      setState((prevState) => ({
        ...prevState,
        gameOver: true,
      }));
      // Stop the interval
      setSpeed(null);
    }
  };

  // The function to reset the game
  const resetGame = () => {
    // Reset the state and the speed
    setState(INITIAL_STATE);
    setSpeed(200);
  };

  // Use an interval to move the snake and check the game over condition
  useInterval(() => {
    moveSnake();
    checkGameOver();
  }, speed);

  // Add an event listener for key press events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  // Render the app component
  return (
    <div className="App">
      <h1>Snake Game</h1>
      <h2>Score: {state.score}</h2>
      <div className="board">
        {/* Render the snake */}
        {state.snake.map((segment, i) => (
          <div
            key={i}
            className="snake"
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
            }}
          />
        ))}
        {/* Render the food */}
        <div
          className="food"
          style={{
            left: `${state.food.x * CELL_SIZE}px`,
            top: `${state.food.y * CELL_SIZE}px`,
          }}
        />
      </div>
      {/* Render the buttons */}
      <div className="buttons">
        <Button dir="UP" onClick={handleClick} />
        <Button dir="DOWN" onClick={handleClick} />
        <Button dir="LEFT" onClick={handleClick} />
        <Button dir="RIGHT" onClick={handleClick} />
      </div>
      {/* Render the menu */}
      {state.gameOver && <Menu score={state.score} onReset={resetGame} />}
    </div>
  );
}

// export default Home;
