import React, { Component } from 'react';

// define or import the initialSnakePosition variable
const initialSnakePosition = [{x: 0, y: 0}];

class Movement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: initialSnakePosition,
      direction: "LEFT",
      data: null, 
      error: null
    };
    this.updateGame = this.updateGame.bind(this);
    this.updateDirection = this.updateDirection.bind(this);
  }

  updateGame() {
    let newSnake = [...this.state.snake];
    switch(this.state.direction) {
      case "LEFT":
        newSnake.unshift({x:newSnake[0].x, y: newSnake[0].y + 1});
        break;
      case "RIGHT":
        newSnake.unshift({x:newSnake[0].x, y: newSnake[0].y - 1});
        break;
      case "UP":
        newSnake.unshift({x:newSnake[0].x - 1, y: newSnake[0].y});
        break;
      case "DOWN":
        newSnake.unshift({x:newSnake[0].x + 1, y: newSnake[0].y});
        break;
      default:
        // do nothing
    }
    newSnake.pop();
    this.setState({ snake: newSnake });
  }

  updateDirection(e) {
    // use e.keyCode instead of e.code
    let code = e.keyCode;
    switch(code) {
      case 38: // use numeric values for key codes
        if(this.state.direction !== "DOWN") this.setState({ direction: "UP" });
        break;
      case 40:
        if(this.state.direction !== "UP") this.setState({ direction: "DOWN" });
        break;
      case 37:
        if(this.state.direction !== "RIGHT") this.setState({ direction: "LEFT" });
        break;
      case 39:
        if(this.state.direction !== "LEFT") this.setState({ direction: "RIGHT" });
        break;
      default:
        // do nothing
    }
  }

  async componentDidMount() {
    this.interval = setInterval(this.updateGame, 500);
    document.addEventListener("keydown", this.updateDirection);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.direction !== this.props.direction) {
      this.setState({ direction: this.props.direction });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener("keydown", this.updateDirection);
  }

  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        {/* Add your UI elements here */}
        {this.state.error ? <p>An error occurred: {this.state.error.message}</p> : null}
        {this.state.data ? <p>Data: {this.state.data}</p> : null}
      </div>
    );
  }
}

export default Movement;


// const [snake, setSnake] = useState(initialSnakePosition);
    // const [direction, setDirection ] = useState("LEFT");

    // function updateGame(){
    //     let newSnake = [...snake];
    //     switch(direction){
    //         case "LEFT":
    //             newSnake.unshift({x:newSnake[0].x, y: newSnake[0].y + 1});
    //             break;
    //         case "RIGHT":
    //             newSnake.unshift({x:newSnake[0].x, y: newSnake[0].y - 1});
    //             break;
    //         case "UP":
    //             newSnake.unshift({x:newSnake[0].x - 1, y: newSnake[0].y});
    //             break;
    //         case "DOWN":
    //             newSnake.unshift({x:newSnake[0].x + 1, y: newSnake[0].y});
    //             break;
    //     }
    //     newSnake.pop();
    //     setSnake(newSnake);
    // }

    // function updateDirection (e){
    //     let code = e.code;
    //     switch(code){
    //         case "ArrowUp":
    //             if(direction !== "DOWN") setDirection("UP");
    //         case "ArrowDown":
    //             if(direction !== "UP") setDirection("DOWN");
    //          case "ArrowLeft":
    //             if(direction !== "RIGHT") setDirection("LEFT");
    //          case "ArrowRight":
    //             if(direction !== "LEFT") setDirection("RIGHT");
    //     }
    // }

    // useEffect(() => {
    //     let interval = setInterval(updateGame, 500);
    //     return () => clearInterval(interval, updateGame);
    // })

    // useeffect(() => {
    //     document.addEventListener("keydown", updateDirection);
    //     return () => clearInterval("keydown", updateDirection);
    // });
