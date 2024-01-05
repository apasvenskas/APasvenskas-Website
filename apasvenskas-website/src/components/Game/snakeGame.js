import React from "react";
import Tile from "./tile";
import './snakeGame.css';

let tcount = 0;

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameMatrix:[],
            snakeList:[[1,1], [1,2], [2,2]],
            incriment:[1,0],
            gameOver: false,
            food: [15, 15],
            isFoodVisable: true
        }
    }

    generateFood = () => {
        return [parseInt(Math.random()*18), parseInt(Math.random()*18)]; 
    }

    gameTick = () => {
        let body = [];
        this.state.snakeList.map((i) => body.push(i));
        tcount = (tcount + 1) % 40;
        let newInc = this.state.incriment;
        let newx = (this.state.snakeList[0][0] + newInc[0]) 
        let newy = (this.state.snakeList[0][1] + newInc[1]);
        body.unshift([newx%19, newy%19]);
        
        let newx2 = (this.state.snakeList[0][0] + newInc[0]) 
        let newy2 = (this.state.snakeList[0][1] + newInc[1]);
        if(this.state.snakeList.filter((i) => {return i[0]  === newx2%19 && i[i] === newy2%19}).length 
        || newx2 < 0 || newx2 > 18 || newy2 < 0 || newy2 > 18) this.setState({gameOver: true})
        else {
            let food = this.state.food;
            let ifv = this.state.isFoodVisable;
            if(tcount === 39){
                food = this.generateFood;
                ifv = true;
            }
            if(!(body[0][0] === food[0] && body[0][1] === food[1])) body.pop();
            else ifv = false;
            this.setState({snakeList: body, food: food, isFoodVisable: ifv});
        }
    }    

    componentDidMount(){
        this._isMounted = true;
        window.fnInterval = setInterval(this.gameTick, 100);
        const keyboard = document.querySelector('body'); 
        keyboard.addEventListener('keydown', e => {
            e.preventDefault();
            let newInc = this.state.incriment;
            if(e.key === 'ArrowUp') newInc=[-1,0];
            else if(e.key === 'ArrowDown') newInc = [1, 0];
            else if(e.key ==='ArrowLeft') newInc = [0, -1];
            else if(e.key === 'ArrowRight') newInc = [0, 1];
            if(newInc[0] + this.state.incriment[0] === 0 && newInc[1] + this.state.
            incriment[1] === 0) return;
            this.setState(prevState => ({incriment: newInc}))
        })
    }

    static getDerivedStateFromProps(props, state){
        let temp = [];
        for(let i=0; i<19; i++){
            let tmep2 = [];
            for(let j=0; j<19; j++) tmep2.push(0);
            temp.push(tmep2)
        }
        temp[state.food[0]][state.food[1]] = 2;
        state.snakeList.map((i) => {
            let x=i[0], y=i[1];
            temp[x][y] = 1;
        })
        return ({gameMatrix:temp});
    }

    renderGameMatrix = () => {
        return this.state.gameMatrix.map((row) => {
            return row.map((t) => {
                if(t===2) return <Tile color = {this.state.isFoodVisable?"red" : "lightgrey"} />
                return <Tile color={t?"blue":"lightgrey"}/>
            })
        })
    }

    restartGame = () => {this.setState({gameOver: false, snakeList: [[1,1], [1,2], [2,2]],
    incriment: [1,0]
    })}

    render(){
        return(
            (<div className="game-container">
                {
                    this.state.gameOver?<><p>"Game Over"</p>
                    <button onClick={this.restartGame}>Restart Game</button>
                    </>:this.renderGameMatrix()
                }
                <h1>{this.state.snakeList.length-3}</h1>
            </div>)
        )
    }
}

export default Game;