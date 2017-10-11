import getDirection from './getDirection';
import directionsMoves from './directionsMoves';

const validateBishopMove = (oldIndex, newIndex, tiles) => {
    let validation = false;
    for(let i = -7; i <= 7; i++){
        if((oldIndex - i - i*8) == newIndex || (oldIndex + i - i*8) == newIndex){
            validation = true;
        }
    }
    if(!validation) return false;
    let direction = getDirection(oldIndex, newIndex);
    const piece = tiles[oldIndex];
    for(let i = (oldIndex+= directionsMoves[direction]); i != newIndex; i+= directionsMoves[direction]){
        if(tiles[i.toString()]) return false;
    }
    if(tiles[newIndex.toString()] && tiles[newIndex.toString()].owner == piece.owner) return false;
    return true;
}

export default validateBishopMove;

