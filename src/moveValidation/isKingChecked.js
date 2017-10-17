import getNextMoveFromDirection from './getNextMoveFromDirection';
const directions = 
[
    {dir:'right',hostilePieces:['Queen', 'Rook']},
    {dir:'left',hostilePieces:['Queen', 'Rook']},
    {dir:'up',hostilePieces:['Queen', 'Rook']},
    {dir:'down',hostilePieces:['Queen', 'Rook']},
    {dir:'up-right',hostilePieces:['Queen', 'Bishop']},
    {dir:'down-right',hostilePieces:['Queen', 'Bishop']},
    {dir:'up-left',hostilePieces:['Queen', 'Bishop']},
    {dir:'down-left',hostilePieces:['Queen', 'Bishop']}
];
const knightMoves = [-17, -15, -10, -6, 17, 15, 10, 6];
const kingMoves = [1, -1, 8, -8, 7, -7, 9, -9];

function isKingChecked(oldIndex, newIndex, tiles){
    const piece = tiles[oldIndex];
    prepareChessBoard();
    let kingIndex = getKingIndex();
    const king = tiles[kingIndex];
    
    if(!checkForRooksQueensAndBishops()) return false;
    if(!checkForKnights()) return false;
    if(!checkForPawns()) return false;
    if(!checkForKing()) return false;
    
    return true;

    function isAnotherPiece(currentIndex, hostilePieces){
        return (tiles[currentIndex] && !(tiles[currentIndex].owner != king.owner && hostilePieces.indexOf(tiles[currentIndex].type) > -1));
    }
    function isHostilePiece(currentIndex, hostilePieces){
        return (tiles[currentIndex] && tiles[currentIndex].owner != king.owner && hostilePieces.indexOf(tiles[currentIndex].type) > -1);
    }
    function prepareChessBoard(){
        tiles[newIndex] = piece;
        delete tiles[oldIndex];
    }
    function getKingIndex(){
        for(let key in tiles) {
            if(tiles[key].owner == piece.owner && tiles[key].type == 'King') {
                return parseInt(key);
            }
        }
    }
    function checkForRooksQueensAndBishops(){
        let currentIndex = kingIndex;
        for(let j = 0;j<directions.length;j++){
            currentIndex = kingIndex;
            for(let i = 1; i <= 7;i++){
                currentIndex = getNextMoveFromDirection(currentIndex, directions[j].dir);
                if(currentIndex == null) break;
                if(isHostilePiece(currentIndex, directions[j].hostilePieces)) return false;
                if(isAnotherPiece(currentIndex,directions[j].hostilePieces)) break;
            }
        }
        return true;
    }
    function checkForKnights(){
        for(let i = 0;i<knightMoves.length;i++){
            if(tiles[kingIndex + knightMoves[i]] && tiles[kingIndex + knightMoves[i]].owner != king.owner && tiles[kingIndex + knightMoves[i]].type == 'Knight') return false;
        }
        return true;
    }
    function checkForKing(){
        let index = null;
        for(let j = 0;j<directions.length;j++){
            index = getNextMoveFromDirection(kingIndex, directions[j].dir);
            if(index == null) continue;
            if(tiles[index] && tiles[index].owner != king.owner && tiles[index].type == 'King') return false;
        }
        return true;
    }
    function checkForPawns(){
        if(piece.owner == 'white'){
            let firstIndex = getNextMoveFromDirection(kingIndex, 'down-left');
            let secondIndex = getNextMoveFromDirection(kingIndex, 'down-right');
            if(firstIndex != null && tiles[firstIndex] && tiles[firstIndex].owner != king.owner && tiles[firstIndex].type == 'Pawn') return false;
            if(secondIndex != null && tiles[secondIndex] && tiles[secondIndex].owner != king.owner && tiles[secondIndex].type == 'Pawn') return false;
        }
        if(piece.owner == 'black'){
            let firstIndex = getNextMoveFromDirection(kingIndex, 'up-left');
            let secondIndex = getNextMoveFromDirection(kingIndex, 'up-right');
            if(firstIndex != null && tiles[firstIndex] && tiles[firstIndex].owner != king.owner && tiles[firstIndex].type == 'Pawn') return false;
            if(secondIndex != null && tiles[secondIndex] && tiles[secondIndex].owner != king.owner && tiles[secondIndex].type == 'Pawn') return false;
        }
        return true;
    }
}

export default isKingChecked;