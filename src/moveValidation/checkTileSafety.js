import getNextMoveFromDirection from './getNextPosition';
import { getX, getY } from './coordinatesHelpers';

const directions =
    [
        { dir: 'right', hostilePieces: ['Queen', 'Rook'] },
        { dir: 'left', hostilePieces: ['Queen', 'Rook'] },
        { dir: 'up', hostilePieces: ['Queen', 'Rook'] },
        { dir: 'down', hostilePieces: ['Queen', 'Rook'] },
        { dir: 'up-right', hostilePieces: ['Queen', 'Bishop'] },
        { dir: 'down-right', hostilePieces: ['Queen', 'Bishop'] },
        { dir: 'up-left', hostilePieces: ['Queen', 'Bishop'] },
        { dir: 'down-left', hostilePieces: ['Queen', 'Bishop'] }
    ];
const knightMoves = [-17, -15, -10, -6, 17, 15, 10, 6];
const kingMoves = [1, -1, 8, -8, 7, -7, 9, -9];

function checkTileSafety(tileIndex, owner, tiles) {

    if (!checkForRooksQueensAndBishops()) return false;
    if (!checkForKnights()) return false;
    if (!checkForPawns()) return false;
    if (!checkForKing()) return false;

    return true;

    function isAnotherPiece(currentIndex, hostilePieces) {
        return (tiles[currentIndex] && !(tiles[currentIndex].owner != owner && hostilePieces.indexOf(tiles[currentIndex].type) > -1));
    }
    function isHostilePiece(currentIndex, hostilePieces) {
        return (tiles[currentIndex] && tiles[currentIndex].owner != owner && hostilePieces.indexOf(tiles[currentIndex].type) > -1);
    }


    function checkForRooksQueensAndBishops() {
        let currentIndex = tileIndex;
        for (let j = 0; j < directions.length; j++) {
            currentIndex = tileIndex;
            for (let i = 1; i <= 7; i++) {
                currentIndex = getNextMoveFromDirection(currentIndex, directions[j].dir);
                if (currentIndex == null) break;
                if (isHostilePiece(currentIndex, directions[j].hostilePieces)) return false;
                if (isAnotherPiece(currentIndex, directions[j].hostilePieces)) break;
            }
        }
        return true;
    }
    function checkForKnights() {
        let oldX = getX(tileIndex);
        let oldY = getY(tileIndex);
        for (let i = 0; i < knightMoves.length; i++) {
            if (validateCoordinates(oldX + knightMoves[i].x, oldY + knightMoves[i].y)) {
                if (tiles[tileIndex + knightMoves[i]] && tiles[tileIndex + knightMoves[i]].owner != owner && tiles[tileIndex + knightMoves[i]].type == 'Knight') return false;
            }
        }
        return true;
    }

    function validateCoordinates(x, y) {
        if (x < 0 || x > 7) return false;
        if (y < 0 || y > 7) return false;
        return true;
    }
    
    function checkForKing() {
        let index = null;
        for (let j = 0; j < directions.length; j++) {
            index = getNextMoveFromDirection(tileIndex, directions[j].dir);
            if (index == null) continue;
            if (tiles[index] && tiles[index].owner != owner && tiles[index].type == 'King') return false;
        }
        return true;
    }
    function checkForPawns() {
        if (owner == 'white') {
            let firstIndex = getNextMoveFromDirection(tileIndex, 'down-left');
            let secondIndex = getNextMoveFromDirection(tileIndex, 'down-right');
            if (firstIndex != null && tiles[firstIndex] && tiles[firstIndex].owner != owner && tiles[firstIndex].type == 'Pawn') return false;
            if (secondIndex != null && tiles[secondIndex] && tiles[secondIndex].owner != owner && tiles[secondIndex].type == 'Pawn') return false;
        }
        if (owner == 'black') {
            let firstIndex = getNextMoveFromDirection(tileIndex, 'up-left');
            let secondIndex = getNextMoveFromDirection(tileIndex, 'up-right');
            if (firstIndex != null && tiles[firstIndex] && tiles[firstIndex].owner != owner && tiles[firstIndex].type == 'Pawn') return false;
            if (secondIndex != null && tiles[secondIndex] && tiles[secondIndex].owner != owner && tiles[secondIndex].type == 'Pawn') return false;
        }
        return true;
    }
}

export default checkTileSafety;