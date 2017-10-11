const isKingChecked = (oldIndex, newIndex, tiles) => {
    const directions = 
    [{dir:1,hostilePieces:['Queen', 'Rook']},
    {dir:-1,hostilePieces:['Queen', 'Rook']},
    {dir:8,hostilePieces:['Queen', 'Rook']},
    {dir:-8,hostilePieces:['Queen', 'Rook']},
    {dir:7,hostilePieces:['Queen', 'Bishop']},
    {dir:-7,hostilePieces:['Queen', 'Bishop']},
    {dir:9,hostilePieces:['Queen', 'Bishop']},
    {dir:9,hostilePieces:['Queen', 'Bishop']}];
    const knightMoves = [-17, -15, -10, -6, 17, 15, 10, 6];
    
    const piece = tiles[oldIndex];
    tiles[newIndex] = piece;
    delete tiles[oldIndex];
    let kingIndex = null;
    for(let key in tiles) {
        if(tiles[key].owner == piece.owner && tiles[key].type == 'King') {
            kingIndex = parseInt(key);
        }
    }
    const king = tiles[kingIndex];
    for(let j = 0;j<directions.length;j++){
        for(let i = 1; i <= 7;i++){
            if(isHostilePiece(i, directions[j].hostilePieces, directions[j].dir)) return false;
            if(isAnotherPiece(i,directions[j].hostilePieces, directions[j].dir)) break;
        }
    }
    for(let i = 0;i<knightMoves.length;i++){
        if(tiles[kingIndex + knightMoves[i]] && tiles[kingIndex + knightMoves[i]].owner != king.owner && tiles[kingIndex + knightMoves[i]].type == 'Knight') return false;
    }

    if(piece.owner == 'white'){
        if(tiles[kingIndex + 7] && tiles[kingIndex + 7].owner != king.owner && tiles[kingIndex + 7].type == 'Pawn') return false;
        if(tiles[kingIndex + 9] && tiles[kingIndex + 9].owner != king.owner && tiles[kingIndex + 9].type == 'Pawn') return false;
    }
    if(piece.owner == 'black'){
        if(tiles[kingIndex - 7] && tiles[kingIndex - 7].owner != king.owner && tiles[kingIndex - 7].type == 'Pawn') return false;
        if(tiles[kingIndex - 9] && tiles[kingIndex - 9].owner != king.owner && tiles[kingIndex - 9].type == 'Pawn') return false;
    }

    return true;

    function isAnotherPiece(i, hostilePieces, direction){
        return (tiles[kingIndex + i*direction] && !(tiles[kingIndex + i*direction].owner != king.owner && hostilePieces.indexOf(tiles[kingIndex + i*direction].type) > -1));
    }
    function isHostilePiece(i, hostilePieces, direction){
        return (tiles[kingIndex + i*direction] && tiles[kingIndex + i*direction].owner != king.owner && hostilePieces.indexOf(tiles[kingIndex + i*direction].type) > -1);
    }
}

export default isKingChecked;