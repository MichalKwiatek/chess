import { fromJS }  from 'immutable';
import { Map }  from 'immutable';
import King from "./King";
import React from "react";

const chessPieces = {
    King
};

const rootReducer = (state, action) => {
    switch (action.type){
        case 'MOVE_PIECE':
            state = state.delete(action.payload.oldIndex.toString()).set(action.payload.newIndex.toString(),fromJS(React.createElement(chessPieces[action.payload.type],{index: 0, type: action.payload.type})));
    }
    return state;
 }

 export default rootReducer;