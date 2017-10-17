import getNextMoveFromDirection from './getNextMoveFromDirection';

const validatePawnMove = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    let validation = false;
    
    if(piece.owner == 'black'){
        if((oldIndex - 8) == newIndex && !tiles[oldIndex - 8]) validation = true;
        if(getNextMoveFromDirection(oldIndex, 'up-right') == newIndex && tiles[oldIndex - 7] && tiles[oldIndex - 7].owner != piece.owner) validation = true;
        if(getNextMoveFromDirection(oldIndex, 'up-left') == newIndex && tiles[oldIndex - 9] && tiles[oldIndex - 9].owner != piece.owner) validation = true;
        if(!piece.touched && (oldIndex - 16) == newIndex && !tiles[oldIndex - 8] && !tiles[oldIndex - 16]) validation = true;
    }
    if(piece.owner == 'white'){
        if((oldIndex + 8) == newIndex && !tiles[oldIndex + 8]) validation = true;
        if(getNextMoveFromDirection(oldIndex, 'down-right') == newIndex && tiles[oldIndex + 7] && tiles[oldIndex + 7].owner != piece.owner) validation = true;
        if(getNextMoveFromDirection(oldIndex, 'down-left') == newIndex && tiles[oldIndex + 9] && tiles[oldIndex + 9].owner != piece.owner) validation = true;
        if(!piece.touched && (oldIndex + 16) == newIndex && !tiles[oldIndex + 8] && !tiles[oldIndex + 16]) validation = true;
    }
    

    return validation;
}

export default validatePawnMove;