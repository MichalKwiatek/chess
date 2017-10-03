import { fromJS }  from 'immutable';
import { Map }  from 'immutable';
import React from "react";

const rootReducer = (state, action) => {
    switch (action.type){
        case 'MOVE_PIECE':
            state = state.delete(action.payload.oldIndex.toString()).set(action.payload.newIndex.toString(),fromJS({type: action.payload.type}));
    }
    return state;
 }

 export default rootReducer;