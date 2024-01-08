// tile.js file
import React from "react";

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                aspectRatio: "1",
                float: "left"
            }
        }
    }
    static getDerivedStateFromProps(props, state){
        return {
            style:{backgroundColor: props.color}
        }
    }
    render(){
        return <div className="game-tile" style={{
           flex: 1,
           backgroundColor: this.props.color,
           border: "1px solid black", 
        }}>
        </div>
    }
};
export default Tile;  



