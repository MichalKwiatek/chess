import React from "react";
import { render } from "react-dom";
import {connect} from "react-redux";

const htmlEntities = {
    white:{
        King: '\u2654',
        Queen:'\u2655',
        Rook:'\u2656',
        Bishop:'\u2657',
        Knight:'\u2658',
        Pawn:'\u2659'
    },
    black:{
        King: '\u265A',
        Queen:'\u265B',
        Rook:'\u265C',
        Bishop:'\u265D',
        Knight:'\u265E',
        Pawn:'\u265F'
    }
}

class ChessPiece extends React.Component{
    constructor(){
        super();
        this.drag = this.drag.bind(this); 
    }

    drag(){
        this.props.setDraggedItem(this.props.index, this.props.type, this.props.owner);
    }

    render() {
        if(this.props.owner && this.props.type) this.object = htmlEntities[this.props.owner][this.props.type];
        else this.object = null;
        return (
            <div draggable="true" className="chessPiece" id={this.props.index} type={this.props.type} onDragStart={this.drag}>
                {this.object}
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setDraggedItem: (index, type, owner) =>{
            dispatch({
                type: 'SET_DRAGGED_ITEM',
                payload:{
                    index,
                    type,
                    owner
                }
            });
        }
    }
}


export default connect(null, mapDispatchToProps)(ChessPiece);