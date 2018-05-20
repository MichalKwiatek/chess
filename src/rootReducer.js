import { fromJS } from 'immutable';
import { Map } from 'immutable';
import React from "react";

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'onMovePiece':
      let chessPiece = state.getIn(['pieces', action.oldIndex.toString()]).set('touched', true);
      return state
        .deleteIn(['pieces', action.oldIndex.toString()])
        .setIn(['pieces', action.newIndex.toString()], chessPiece);
    case 'SET_DRAGGED_ITEM':
      return state.set('dragged', fromJS(action.payload));
    case 'onSetPiecePossibleMoves':
      return state.setIn(['possibleMoves', action.index], fromJS(action.possibleMoves));
  }
  return state;
}

export default rootReducer;