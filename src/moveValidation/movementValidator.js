import validateKingMove from './KingMoveValidator';
import validatePawnMove from './PawnMoveValidator';
import validateKnightMove from './KnightMoveValidator';
import validateBishopMove from './BishopMoveValidator';
import validateRookMove from './RookMoveValidator';
import validateQueenMove from './QueenMoveValidator';

const validateMove = (type, oldIndex, newIndex, tiles) => {
    if(type == 'King'){
        return validateKingMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Pawn'){
        return validatePawnMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Knight'){
        return validateKnightMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Bishop'){
        return validateBishopMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Rook'){
        return validateRookMove(oldIndex, newIndex, tiles);
    }
    if(type == 'Queen'){
        return validateQueenMove(oldIndex, newIndex, tiles);
    }
    return true;
}

export default validateMove;