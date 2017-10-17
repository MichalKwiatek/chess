import getNextMoveFromDirection from './getNextMoveFromDirection';
import getDirection from './getDirection';

const validateCastling = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    const direction = getDirection(oldIndex, newIndex);
    let currentIndex = oldIndex;
    while(true){
        current = getNextMoveFromDirection(currentIndex, direction);
    }
}
export default validateCastling;