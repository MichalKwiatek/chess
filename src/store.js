import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { fromJS }  from 'immutable';
import King from "./King";
import React from "react";

const chessPieces = {
    King
};

const defaultState = fromJS({
    0: React.createElement(chessPieces['King'],{index: 0, type: 'King'})
});

const store = createStore(rootReducer, defaultState);

export default store;