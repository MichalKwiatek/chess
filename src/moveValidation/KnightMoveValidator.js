import knightMoves from './knightMoves';

const validateKnightMove = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    let oldX = getX(oldIndex);
    let oldY = getY(oldIndex);
    for(let i = 0;i<knightMoves.length;i++){
        if(validateCoordinates(oldX + knightMoves[i].x, oldX + knightMoves[i].y) && newIndex - oldIndex == knightMoves[i].total){
            if(tiles[newIndex] && tiles[newIndex].owner == piece.owner) return false;
        }
    }
    return true;
}

function validateCoordinates(x, y){
    if(x < 0 || x > 7) return false;
    if(y < 0 || y > 7) return false;
    return true;
}

function getX(index){
    return Math.floor(index/8);
}

function getY(index){
    return index % 8;
}

export default validateKnightMove;