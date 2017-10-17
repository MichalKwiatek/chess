const validateMove = (oldIndex, newIndex, tiles) => {
    const piece = tiles[oldIndex];
    if(piece.type != 'King') return false;
    if(piece.owner == 'white'){
        if(oldIndex != 3 && (newIndex - oldIndex != 2)) return false;
    }
    if(piece.owner == 'black'){
        if(oldIndex != 59 && (newIndex - oldIndex != 2)) return false;
    }
}
export default validateMove;