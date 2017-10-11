const validateKingMove = (oldIndex, newIndex, tiles) => {
    let validation = false;
    const piece = tiles[oldIndex];
    
    for(let i = -1; i < 2; i++){
        if(((oldIndex - 1 - i*8) == newIndex) || ((oldIndex + 1 - i*8) == newIndex) || ((oldIndex - i*8) == newIndex)){
            validation = true;
        }
    }
    if(!validation) return false;
    if(tiles[newIndex] && tiles[newIndex].owner == piece.owner) return false;
    return true;
}

export default validateKingMove;