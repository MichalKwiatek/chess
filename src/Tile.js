import React from "react";
import {connect} from "react-redux";
import King from "./King";

class Tile extends React.Component{
    constructor(props){
        super();
        this.classString = ((props.x + props.y) % 2) ? 'tile white' : 'tile green'; 
        this.index = props.x + props.y * 8;
        this.tile = props.tiles[this.index.toString()];
        this.object = this.tile
         ? React.createElement(this.tile.type)
         : null;
    }

    movePiece(){
        this.props.movePiece(0,1,'King');
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        var data = ev.dataTransfer.getData("text");
        ev.preventDefault();
    }

    render() {
        return (
            <div className={this.classString}  onDrop={this.drop} onDragOver={this.allowDrop}>
                {this.object}
                <button style={{position:'absolute'}} onClick={this.movePiece.bind(this)}>g</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        tiles: state.toJS()
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        movePiece: (oldIndex, newIndex, type) =>{
            dispatch({
                type: 'MOVE_PIECE',
                payload:{
                    oldIndex,
                    newIndex,
                    type
                }
            });
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tile);