import React, {Component} from "react";
import { Button } from "@material-ui/core";
import Game from "./Game/snakeGame";
import styles from './home.module.css';

export function Home() {
  
  return (
    <>
      <div className={styles.snake}>
        <div className={styles.score}></div>
        <div className={styles.controls}>
          <h1>The Snake Game</h1>
          <h3>snake game coming soon, work in progress</h3>
          <Button onClick={Game} >PLAY</Button>
          {/* <Button >Down</Button>
          <Button >Left</Button>
          <Button >Right</Button> */}
        </div>
      </div>
    </>
  );
  }
  
      
