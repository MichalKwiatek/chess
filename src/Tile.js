import React from "react";
import {connect} from "react-redux";
import King from "./King";

const chessPieces = {
    King
  };

class Tile extends React.Component{
    constructor(props){
        super();
        this.classString = ((props.x + props.y) % 2) ? 'tile white' : 'tile green'; 
        this.index = props.x + props.y * 8;
    }

    onDragOver(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        var data = ev.dataTransfer.getData("text");
        ev.preventDefault();
    }

    render() {
        this.tile = this.props.tiles[this.index.toString()];
        this.object = this.tile
         ? React.createElement(chessPieces[this.tile.type])
         : null;
        return (
            <div className={this.classString}  onDrop={this.drop} onDragOver={this.onDragOver} id={this.index}>
                {this.object}
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