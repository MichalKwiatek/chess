import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { fromJS }  from 'immutable';
import React from "react";

const defaultState = fromJS({
    0: {type:'King'}
});

const store = createStore(rootReducer, defaultState);

export default store;