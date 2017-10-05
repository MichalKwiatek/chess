import React from "react";
import { render } from "react-dom";
import {connect} from "react-redux";

class King extends React.Component{
    constructor(){
        super();
        this.drag = this.drag.bind(this); 
    }

    drag(){
        this.props.setDraggedItem(this.props.index);
    }

    render() {
        return (
            <div draggable="true" className="chessPiece" id={this.props.index} type={this.props.type} onDragStart={this.drag}>
                King
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setDraggedItem: (index, type) =>{
            dispatch({
                type: 'SET_DRAGGED_ITEM',
                payload:{
                    index,
                    type
                }
            });
        }
    }
}


export default connect(null, mapDispatchToProps)(King);