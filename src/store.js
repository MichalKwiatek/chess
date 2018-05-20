import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk'

const defaultState = fromJS({
  pieces: {
    0: { type: 'Rook', owner: 'white' },
    1: { type: 'Knight', owner: 'white' },
    2: { type: 'Bishop', owner: 'white' },
    3: { type: 'King', owner: 'white' },
    4: { type: 'Queen', owner: 'white' },
    5: { type: 'Bishop', owner: 'white' },
    6: { type: 'Knight', owner: 'white' },
    7: { type: 'Rook', owner: 'white' },
    8: { type: 'Pawn', owner: 'white' },
    9: { type: 'Pawn', owner: 'white' },
    10: { type: 'Pawn', owner: 'white' },
    11: { type: 'Pawn', owner: 'white' },
    12: { type: 'Pawn', owner: 'white' },
    13: { type: 'Pawn', owner: 'white' },
    14: { type: 'Pawn', owner: 'white' },
    15: { type: 'Pawn', owner: 'white' },
    56: { type: 'Rook', owner: 'black' },
    57: { type: 'Knight', owner: 'black' },
    58: { type: 'Bishop', owner: 'black' },
    59: { type: 'King', owner: 'black' },
    60: { type: 'Queen', owner: 'black' },
    61: { type: 'Bishop', owner: 'black' },
    62: { type: 'Knight', owner: 'black' },
    63: { type: 'Rook', owner: 'black' },
    48: { type: 'Pawn', owner: 'black' },
    49: { type: 'Pawn', owner: 'black' },
    50: { type: 'Pawn', owner: 'black' },
    51: { type: 'Pawn', owner: 'black' },
    52: { type: 'Pawn', owner: 'black' },
    53: { type: 'Pawn', owner: 'black' },
    54: { type: 'Pawn', owner: 'black' },
    55: { type: 'Pawn', owner: 'black' }
  },
  dragged: {},
  possibleMoves: {},
});

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
)

const store = createStore(
  rootReducer,
  defaultState,
  enhancer
);

export default store;