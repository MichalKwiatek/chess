function prepareChessBoardAfterMove(oldIndex, newIndex, oldTiles){
    let newTiles = JSON.parse(JSON.stringify(oldTiles));
    let piece = newTiles[oldIndex];
    newTiles[newIndex] = piece;
    delete newTiles[oldIndex];
    return newTiles;
}

export default prepareChessBoardAfterMove;