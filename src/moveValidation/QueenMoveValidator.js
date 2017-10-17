import getDirection from './getDirection';
import directionsMoves from './directionsMoves';

const validateQueenMove = (oldIndex, newIndex, tiles) => {
    let validation = false;
    for(let i = -7; i <= 7; i++){
        if((oldIndex - i*8) == newIndex || (oldIndex - i) == newIndex || (oldIndex - i - i*8) == newIndex || (oldIndex + i - i*8) == newIndex){
            validation = true;
        }
    }
    if(!validation) return false;
    let direction = getDirection(oldIndex, newIndex);
    const piece = tiles[oldIndex];
    for(let i = (oldIndex+= directionsMoves[direction].total); i != newIndex; i+= directionsMoves[direction].total){
        if(isNaN(i)) {
            return false;
        }
        if(tiles[i.toString()]) return false;
    }
    if(tiles[newIndex.toString()] && tiles[newIndex.toString()].owner == piece.owner) return false;
    return true;
}

export default validateQueenMove;