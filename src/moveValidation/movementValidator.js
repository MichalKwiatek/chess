import validateKingMove from './KingMoveValidator';
import validatePawnMove from './PawnMoveValidator';
import validateKnightMove from './KnightMoveValidator';
import validateBishopMove from './BishopMoveValidator';
import validateRookMove from './RookMoveValidator';
import validateQueenMove from './QueenMoveValidator';
import isKingChecked from './isKingChecked';

const validateMove = (type, oldIndex, newIndex, tiles) => {
    if(newIndex == oldIndex) return false;
    let validation = false;
    if(type == 'King'){
        validation = validateKingMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Pawn'){
        validation = validatePawnMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Knight'){
        validation = validateKnightMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Bishop'){
        validation = validateBishopMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Rook'){
        validation = validateRookMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Queen'){
        validation = validateQueenMove(oldIndex, newIndex, JSON.parse(JSON.stringify(tiles)));
    }
    if(!validation) return false;
    return isKingChecked(oldIndex, newIndex, tiles);
}

export default validateMove;