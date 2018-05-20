export const onSetPiecePossibleMoves = (index, possibleMoves) => {
  return {
    type: 'onSetPiecePossibleMoves',
    index,
    possibleMoves,
  }
}

export const onMovePiece = (oldIndex, newIndex, type) => {
  return (dispatch, getState) => {
    if (getState().getIn(['possibleMoves', oldIndex]).includes(newIndex)) {
      return onMovePieceSuccess(oldIndex, newIndex, type)
    }
  }
}

export const onMovePieceSuccess = (oldIndex, newIndex, type) => {
  return {
    type: 'onMovePieceSuccess',
    oldIndex,
    newIndex
  }
}
