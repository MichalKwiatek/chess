function prepareChessBoardAfterMove(oldIndex, newIndex, oldTiles){
    let newTiles = Object.assign({}, oldTiles)
    let piece = newTiles[oldIndex];
    newTiles[newIndex] = piece;
    delete newTiles[oldIndex];
    return newTiles;
}

export default prepareChessBoardAfterMove;