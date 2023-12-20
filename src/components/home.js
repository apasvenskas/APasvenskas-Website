import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import styles from './home.module.css';

// The size of each cell in the grid
const CELL_SIZE = 20;

// The initial state of the game
const initialState = {
  // The snake is an array of segments, each with an x and y coordinate
  snake: [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ],
  // The direction is an object with an x and y component
  direction: { x: 0, y: -1 },
  // The food is an object with an x and y coordinate
  food: { x: 15, y: 15 },
  // The score is a number
  score: 0,
};

// A custom hook to run a function at a certain interval
function useInterval(callback, delay) {
  // Save the callback in a ref to prevent changing the interval
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval and clear it when unmounting
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => callbackRef.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// The main component for the game
function Home() {
  // Use state hooks to store the game state and the speed
  const [state, setState] = useState(initialState);
  const [speed, setSpeed] = useState(200);

  // A function to move the snake by one step
  const moveSnake = () => {
    // Get the current state
    const { snake, direction, food, score } = state;

    // Get the head of the snake
    const head = snake[0];

    // Calculate the new head position based on the direction
    const newHead = {
      x: head.x + direction.x,
      y: head.y + direction.y,
    };

    // Check if the snake has hit the wall or itself
    const hasHitWall =
      newHead.x < 0 ||
      newHead.x >= Math.floor(window.innerWidth / CELL_SIZE) ||
      newHead.y < 0 ||
      newHead.y >= Math.floor(window.innerHeight / CELL_SIZE);

    const hasHitSelf = snake.some(
      (segment) => segment.x === newHead.x && segment.y === newHead.y
    );

    // If the snake has hit something, reset the game
    if (hasHitWall || hasHitSelf) {
      setState(initialState);
      setSpeed(200);
      return;
    }

    // Check if the snake has eaten the food
    const hasEatenFood = newHead.x === food.x && newHead.y === food.y;

    // If the snake has eaten the food, increase the score and the speed, and generate a new food position
    if (hasEatenFood) {
      const newScore = score + 1;
      const newSpeed = speed - 10;
      const newFood = {
        x: Math.floor(Math.random() * Math.floor(window.innerWidth / CELL_SIZE)),
        y: Math.floor(
          Math.random() * Math.floor(window.innerHeight / CELL_SIZE)
        ),
      };

      // Set the new state with the new head, score, speed, and food
      setState({
        snake: [newHead, ...snake],
        direction,
        food: newFood,
        score: newScore,
      });
      setSpeed(newSpeed);
    } else {
      // If the snake has not eaten the food, just move the snake by adding the new head and removing the tail
      setState({
        snake: [newHead, ...snake.slice(0, -1)],
        direction,
        food,
        score,
      });
    }
  };

  // A function to handle the key press event
  const handleKeyPress = (event) => {
    // Get the current direction
    const { direction } = state;

    // Change the direction based on the key code
    switch (event.keyCode) {
      case 37: // left arrow
        // Prevent going left if already going right
        if (direction.x !== 1) {
          setState({ ...state, direction: { x: -1, y: 0 } });
        }
        break;
      case 38: // up arrow
        // Prevent going up if already going down
        if (direction.y !== 1) {
          setState({ ...state, direction: { x: 0, y: -1 } });
        }
        break;
      case 39: // right arrow
        // Prevent going right if already going left
        if (direction.x !== -1) {
          setState({ ...state, direction: { x: 1, y: 0 } });
        }
        break;
      case 40: // down arrow
        // Prevent going down if already going up
        if (direction.y !== -1) {
          setState({ ...state, direction: { x: 0, y: 1 } });
        }
        break;
      default:
        break;
    }
  };

  // A function to handle the click event on the buttons
  const handleClick = (dir) => {
    // Get the current direction
    const { direction } = state;

    // Change the direction based on the button value
    switch (dir) {
      case "LEFT":
        // Prevent going left if already going right
        if (direction.x !== 1) {
          setState({ ...state, direction: { x: -1, y: 0 } });
        }
        break;
      case "UP":
        // Prevent going up if already going down
        if (direction.y !== 1) {
          setState({ ...state, direction: { x: 0, y: -1 } });
        }
        break;
      case "RIGHT":
        // Prevent going right if already going left
        if (direction.x !== -1) {
          setState({ ...state, direction: { x: 1, y: 0 } });
        }
        break;
      case "DOWN":
        // Prevent going down if already going up
        if (direction.y !== -1) {
          setState({ ...state, direction: { x: 0, y: 1 } });
        }
        break;
      default:
        break;
    }
  };

  // Use the custom hook to move the snake at a certain speed
  useInterval(moveSnake, speed);

  // Use an effect hook to add and remove the key press event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Render the game elements using the state
  return (
    <>
      <div className={styles.snake}>
        <div className={styles.backgroundGrid}>
          {/* Horizontal grid lines */}
          {Array.from(
            { length: Math.max(0, Math.floor(window.innerHeight / CELL_SIZE)) },
            (_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "1px", // uncomment this line
                  top: `${i * CELL_SIZE}px`,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              />
            )
          )}
          {/* Vertical grid lines */}
          {Array.from(
            { length: Math.max(0, Math.floor(window.innerWidth / CELL_SIZE)) },
            (_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "1px", // uncomment this line
                  left: `${i * CELL_SIZE}px`,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              />
            )
          )}
        </div>
        {state.snake.map((segment) => (
          <div
            key={`${segment.x}-${segment.y}`} // use a unique and stable key
            className={styles.cell + " " + styles.segment}
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
            }}
          />
        ))}
        <div
          className={styles.cell + " " + styles.food}
          style={{
            left: `${state.food.x * CELL_SIZE}px`,
            top: `${state.food.y * CELL_SIZE}px`,
          }}
        />
        <div className={styles.score}>Score: {state.score}</div>
        <div className={styles.controls}>
          <Button onClick={() => handleClick("UP")}>Up</Button>
          <Button onClick={() => handleClick("DOWN")}>Down</Button>
          <Button onClick={() => handleClick("LEFT")}>Left</Button>
          <Button onClick={() => handleClick("RIGHT")}>Right</Button>
        </div>
      </div>
    </>
  );
  
      
