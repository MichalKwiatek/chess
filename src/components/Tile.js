import React from "react";
import { connect } from "react-redux";
import ChessPiece from "./ChessPiece";
import checkIfCastling from '../moveValidation/checkIfCastling';
import validateCastling from '../moveValidation/validateCastling';
import calculatePossibleMoves from '../moveValidation/calculatePossibleMoves';
import * as actions from 'actions';

class Tile extends React.Component {
  constructor(props) {
    super();
    this.classString = ((props.x + props.y) % 2) ? 'tile green' : 'tile white';
    this.index = props.x * 8 + props.y;
    this.drop = this.drop.bind(this);
    this.possibleMoves = [];
  }

  onDragOver(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    this.props.onMovePiece()
    // if (checkIfCastling(this.props.dragged.index, this.index, this.props.tiles) && validateCastling(this.props.dragged.index, this.index, this.props.tiles)) {
    //   this.props.movePiece(this.props.dragged.index, this.index);
    //   if (this.props.dragged.index > this.index) this.props.movePiece(this.index - 1, this.index + 1);
    //   if (this.props.dragged.index < this.index) this.props.movePiece(this.index + 2, this.index - 1);
    // }
    ev.preventDefault();
  }

  render() {
    this.tile = this.props.tiles[this.index.toString()];

    return (
      <div className={this.classString} onDrop={this.drop} onDragOver={this.onDragOver} id={this.index}>
        {this.tile
          ? <ChessPiece index={this.index} type={this.tile.type} owner={this.tile.owner} />
          : null}
      </div>
    );
  }

  componentDidMount() {
    if (this.tile) {
      const possibleMoves = calculatePossibleMoves(this.index, this.props.tiles);
      this.props.onSetPiecePossibleMoves(this.index, possibleMoves)
    }
  }

  componentDidUpdate() {
    if (this.tile) {
      const possibleMoves = calculatePossibleMoves(this.index, this.props.tiles);
      // this.props.onSetPiecePossibleMoves(this.index, possibleMoves)
    }
  }
}
const mapStateToProps = (state) => {
  state = state.toJS();
  return {
    tiles: state.pieces,
    dragged: state.dragged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    movePiece: (oldIndex, newIndex) => dispatch(actions.onMovePiece(oldIndex, newIndex)),
    onSetPiecePossibleMoves: (index, possibleMoves) => dispatch(actions.onSetPiecePossibleMoves(index, possibleMoves))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tile);