import checkTileSafety from './checkTileSafety';
import prepareChessBoardAfterMove from './prepareChessBoardAfterMove';

const checkSafety = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
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

export default checkSafety;