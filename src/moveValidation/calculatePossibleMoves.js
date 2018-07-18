import rookDirections from 'rookDirections';
import kingAndQueenDirections from 'kingAndQueenDirections';
import bishopDirections from 'bishopDirections';

import getKingMoves from 'getKingMoves';
import getPawnMoves from 'getPawnMoves';
import getKnightMoves from 'getKnightMoves';
import getLongDistancePieceMoves from 'getLongDistancePieceMoves';
import checkSafety from 'checkSafety';

function calculatePossibleMoves(index, tiles) {
	let moves = [];
	const type = tiles[index].type;

	if (type == 'King') {
		moves = getKingMoves(index, tiles);
	}
	if (type == 'Pawn') {
		moves = getPawnMoves(index, tiles);
	}
	if (type == 'Knight') {
		moves = getKnightMoves(index, tiles);
	}
	if (type == 'Bishop') {
		moves = getLongDistancePieceMoves(index, tiles, bishopDirections);
	}
	if (type == 'Rook') {
		moves = getLongDistancePieceMoves(index, tiles, rookDirections);
	}
	if (type == 'Queen') {
		moves = getLongDistancePieceMoves(index, tiles, kingAndQueenDirections);
	}

	moves.filter(move => checkSafety(index, move, tiles))

	return moves;
}

export default calculatePossibleMoves;