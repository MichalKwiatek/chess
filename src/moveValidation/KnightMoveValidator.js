const validateKnightMove = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    let correctMoves = [-17, -15, -10, -6, 17, 15, 10, 6];
    if(!(correctMoves.indexOf(newIndex - oldIndex) > -1)) return false;
    if(tiles[newIndex] && tiles[newIndex].owner == piece.owner) return false;
    return true;
}

export default validateKnightMove;