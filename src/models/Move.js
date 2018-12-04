import { Record } from 'immutable'
import MoveTypes from './MoveTypes';

export default Move = new Record({
  newPosition: null,
  oldPosition: null,
  type: MoveTypes.REGULAR,
})
