export const onSetPiecePossibleMoves = (index, possibleMoves) => {
  return {
    type: 'onSetPiecePossibleMoves',
    index,
    possibleMoves,
  }
}

export const onMoveDraggedPieceIfPossible = (newIndex) => {
  return (dispatch, getState) => {
    const state = getState()
    const oldIndex = state.getIn(['dragged', 'index'])
    if (state.getIn(['possibleMoves', oldIndex]).includes(newIndex)) {
      dispatch(onMovePieceSuccess(oldIndex, newIndex))
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
