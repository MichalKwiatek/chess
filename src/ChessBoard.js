import React from "react";
import { render } from "react-dom";
import Tile from "./Tile";
import './chessboard.scss';

class ChessBoard extends React.Component{
    constructor(){
        super();
        this.tiles = this.generateTiles();
    }

    generateTiles(){
        var rows = [];
        for (let x=0; x < 8; x++) {
            for (let y=0; y < 8; y++) {
                rows.push(<Tile x={x} y={y}/>);
            }
        }
        return rows;
    }

    render() {
        return (
            <div className="chessboard">
                {this.tiles}
            </div>
        );
    }
}

export default ChessBoard;