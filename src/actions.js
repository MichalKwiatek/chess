export const onSetPiecePossibleMoves = (index, possibleMoves) => {
  return {
    type: 'onSetPiecePossibleMoves',
    index,
    possibleMoves,
  }
}

export const onMovePiece = (oldIndex, newIndex) => {
  return (dispatch, getState) => {
    if (getState().getIn(['possibleMoves', oldIndex]).includes(newIndex)) {
      return onMovePieceSuccess(oldIndex, newIndex)
    }
  }
}

export const onMovePieceSuccess = (oldIndex, newIndex) => {
  return {
    type: 'onMovePieceSuccess',
    oldIndex,
    newIndex
  }
}
