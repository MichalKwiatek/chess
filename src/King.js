import React from "react";
import { render } from "react-dom";

class King extends React.Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div draggable="true" className="chessPiece" id={this.props.index} type={this.props.type}>
                King
            </div>
        );
    }
}

export default King;