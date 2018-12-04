import getNextPosition from 'getNextPosition';
import isHostileOrEmpty from 'isHostileOrEmpty';
import kingDirections from 'kingAndQueenDirections';
import validateCastling from '../castling/validateCastling';

const getKingMoves = (index, tiles) => {
	let moves = [];
	const piece = tiles[index];

	for (let j = 0; j < kingDirections.length; j++) {
		let position = getNextPosition(index, kingDirections[j]);
		if (position && isHostileOrEmpty(tiles, position, piece.owner)) moves.push(position);
	}

	const castlingMoves = getCastlingMoves(index)

	castlingMoves.forEach((move) => {
		if (validateCastling(index, move, tiles)) {
			moves.push(move)
		}
	})

	return moves;
}

function getCastlingMoves(index) {
	if (index === 3) {
		return [1, 5]
	}

	if (index === 59) {
		return [57, 61]
	}

	return []
}

export default getKingMoves;