import React from "react";
import {connect} from "react-redux";
import ChessPiece from "./ChessPiece";
import validateMove from '../moveValidation/movementValidator';
import checkIfCastling from '../moveValidation/checkIfCastling';
import validateCastling from '../moveValidation/validateCastling';

class Tile extends React.Component{
    constructor(props){
        super();
        this.classString = ((props.x + props.y) % 2) ? 'tile green' : 'tile white'; 
        this.index = props.x * 8 + props.y;
        this.drop = this.drop.bind(this);
    }

    onDragOver(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        if(validateMove(this.props.dragged.type, this.props.dragged.index, this.index,this.props.tiles)){
            if(checkIfCastling(this.props.dragged.index, this.index,this.props.tiles) && validateCastling()) null; 
            this.props.movePiece(this.props.dragged.index, this.index);
        }
        ev.preventDefault();
    }

    render() {
        this.tile = this.props.tiles[this.index.toString()];
        this.object = this.tile
         ? React.createElement(ChessPiece, {index: this.index, type:this.tile.type, owner:this.tile.owner})
         : null;
        return (
            <div className={this.classString}  onDrop={this.drop} onDragOver={this.onDragOver} id={this.index}>
                {this.object}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    state = state.toJS();
    return{
        tiles: state.pieces,
        dragged: state.dragged
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        movePiece: (oldIndex, newIndex, type) =>{
            dispatch({
                type: 'MOVE_PIECE',
                payload:{
                    oldIndex,
                    newIndex
                }
            });
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tile);