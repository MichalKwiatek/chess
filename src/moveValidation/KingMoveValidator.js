import directionsMoves from './directionsMoves';
import getNextMoveFromDirection from './getNextMoveFromDirection';

const validateKingMove = (oldIndex, newIndex, tiles) => {
    let moves = Object.keys(directionsMoves);
    const king = tiles[oldIndex];
    for(let j = 0;j<moves.length;j++){
        let index = getNextMoveFromDirection(oldIndex, moves[j]);
        if(index == newIndex && (!tiles[index] || tiles[index].owner != king.owner)) return true;
    }
    return false;
}

export default validateKingMove;