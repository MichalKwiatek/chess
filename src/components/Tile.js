import React from "react";
import { connect } from "react-redux";
import ChessPiece from "./ChessPiece";
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
    this.props.onMoveDraggedPieceIfPossible(this.index)
    ev.preventDefault();
  }

  render() {
    this.tile = this.props.tiles.get(this.index.toString())
    return (
      <div className={this.classString} onDrop={this.drop} onDragOver={this.onDragOver} id={this.index}>
        {this.tile
          ? <ChessPiece index={this.index} type={this.tile.get('type')} owner={this.tile.get('owner')} />
          : null}
      </div>
    );
  }

  componentDidMount() {
    if (this.tile) {
      const possibleMoves = calculatePossibleMoves(this.index, this.props.tiles.toJS());
      this.props.onSetPiecePossibleMoves(this.index, possibleMoves)
    }
  }

  componentDidUpdate() {
    if (this.tile) {
      const possibleMoves = calculatePossibleMoves(this.index, this.props.tiles.toJS());
      this.props.onSetPiecePossibleMoves(this.index, possibleMoves)
    }
  }
}
const mapStateToProps = (state) => {
  return {
    tiles: state.get('pieces'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMoveDraggedPieceIfPossible: (newIndex) => dispatch(actions.onMoveDraggedPieceIfPossible(newIndex)),
    onSetPiecePossibleMoves: (index, possibleMoves) => dispatch(actions.onSetPiecePossibleMoves(index, possibleMoves))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tile);