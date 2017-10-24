import getNextMoveFromDirection from './getNextMoveFromDirection';
import getDirection from './getDirection';
import prepareChessBoardAfterMove from './prepareChessBoardAfterMove';
import checkTileSafety from './checkTileSafety';

const validateCastling = (oldIndex, newIndex, tiles) => {
    const king = tiles[oldIndex];
    if(king.touched) return false;
    const direction = getDirection(oldIndex, newIndex);
    let currentIndex = oldIndex;
    let newTiles = prepareChessBoardAfterMove(oldIndex, newIndex, tiles);
    if(!checkTileSafety(currentIndex, king.owner, newTiles)) return false;
    while(true){
        currentIndex = getNextMoveFromDirection(currentIndex, direction);
        var piece = tiles[currentIndex];
        if(piece){
            if(piece.type == 'Rook' && piece.owner == king.owner && !piece.touched) return true;
            else return false;
        }
        else {
            let newTiles = prepareChessBoardAfterMove(oldIndex, newIndex, tiles);
            if(!checkTileSafety(currentIndex, king.owner, newTiles)) return false;
        }
        
    }
}
export default validateCastling;