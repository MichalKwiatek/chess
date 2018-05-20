import getNextPosition from 'getNextPosition';
import isHostileOrEmpty from 'isHostileOrEmpty';
import kingDirections from 'kingAndQueenDirections';

const getKingMoves = (index, tiles) => {
	let moves = [];
	const piece = tiles[index];

	for (let j = 0; j < kingDirections.length; j++) {
		var bool = tiles[position]
		let position = getNextPosition(index, kingDirections[j]);
		if (position && isHostileOrEmpty(tiles, position, piece.owner)) moves.push(position);
	}

	return moves;
}

export default getKingMoves;