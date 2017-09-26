import React from "react";
import {connect} from "react-redux";


class Tile extends React.Component{
    constructor(props){
        super();
        this.classString = ((props.x + props.y) % 2) ? 'tile white' : 'tile green'; 
        this.index = props.x + props.y * 8;
        this.tile = props.tiles.get(this.index.toString());
        this.object = this.tile
         ? this.tile.toJS()
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
                {this.props.tiles.get(this.index.toString()) ? this.props.tiles.get(this.index.toString()).toJS(): null}
                <button style={{position:'absolute'}} onClick={this.movePiece.bind(this)}>g</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        tiles: state
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