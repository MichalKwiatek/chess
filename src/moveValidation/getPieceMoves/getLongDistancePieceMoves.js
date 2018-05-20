import getNextPosition from 'getNextPosition';
import isHostileOrEmpty from 'isHostileOrEmpty';
import isEmpty from 'isEmpty';

const getLongDistancePieceMoves = (index, tiles, directions) => {
	const piece = tiles[index];
	let moves = [];

	for (let i = 0; i < directions.length; i++) {
		let direction = directions[i]
		let position = index

		while (true) {
			position = getNextPosition(position, direction)
			if (position && isHostileOrEmpty(tiles, position, piece.owner)) moves.push(position)
			if (!position || !isEmpty(tiles, position)) break
		}
	}

	return moves
}

export default getLongDistancePieceMoves;

