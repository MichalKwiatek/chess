import validateKingMove from './KingMoveValidator';
import validatePawnMove from './PawnMoveValidator';
import validateKnightMove from './KnightMoveValidator';
import validateBishopMove from './BishopMoveValidator';
import validateRookMove from './RookMoveValidator';
import validateQueenMove from './QueenMoveValidator';
import checkTileSafety from './checkTileSafety';
import prepareChessBoardAfterMove from './prepareChessBoardAfterMove';

const validateMove = (type, oldIndex, newIndex, tiles) => {
    if(newIndex == oldIndex) return false;
    let validation = false;
    const piece = tiles[oldIndex];
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
        validation = validateQueenMove(oldIndex, newIndex, tiles);
    }
    if(!validation) return false;
    const newTiles = prepareChessBoardAfterMove(oldIndex, newIndex, tiles);
    let kingIndex = getKingIndex(newTiles);
    return checkTileSafety(kingIndex, piece.owner, newTiles);

    function getKingIndex(newTiles){
        for(let key in newTiles) {
            if(newTiles[key].owner == piece.owner && newTiles[key].type == 'King') {
                return parseInt(key);
            }
        }
    }
}

export default validateMove;