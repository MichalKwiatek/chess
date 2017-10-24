const checkIfCastling = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    if(piece.type != 'King') return false;
    if(piece.owner == 'white'){
        if(oldIndex == 3 && Math.abs(newIndex - oldIndex) == 2) return true;
    }
    if(piece.owner == 'black'){
        if(oldIndex == 59 && Math.abs(newIndex - oldIndex) == 2) return true;
    }
    return false;
}
export default checkIfCastling;