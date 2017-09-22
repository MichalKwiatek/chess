import React from "react";
import { render } from "react-dom";
import Tile from "./Tile";

class ChessBoard extends React.Component{
    constructor(){
        super();
        this.tiles = this.generateRows();
    }

    generateRows(){
        var rows = [];
        for (let i=0; i < 8; i++) {
            for (let j=0; j < 8; j++) {
                rows.push(<Tile />);
            }
        }
        return rows;
    }

    render() {
        return (
            <div>
                {this.tiles}
            </div>
        );
    }
}

export default ChessBoard;