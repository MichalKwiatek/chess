import { fromJS }  from 'immutable';
import { Map }  from 'immutable';
import React from "react";

const rootReducer = (state, action) => {
    switch (action.type){
        case 'MOVE_PIECE':
            let chessPiece = state.getIn(['pieces', action.payload.oldIndex.toString()]).set('touched',true);
            state = state.deleteIn(['pieces', action.payload.oldIndex.toString()]).setIn(['pieces', action.payload.newIndex.toString()],chessPiece);
            break;
        case 'SET_DRAGGED_ITEM':
            state = state.set('dragged',fromJS(action.payload));
            break;
        }
    return state;
 }

 export default rootReducer;