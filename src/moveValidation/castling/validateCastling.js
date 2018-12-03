import prepareChessBoardAfterMove from 'prepareChessBoardAfterMove';
import checkTileSafety from 'checkTileSafety';

const validateCastling = (oldIndex, newIndex, tiles) => {
	const king = tiles[oldIndex];
	if (king.touched) {
		return false;
	}

	if (!checkTileSafety(oldIndex, king.owner, tiles)) {
		return false;
	}

	let newTiles = prepareChessBoardAfterMove(oldIndex, newIndex, tiles);
	if (!checkTileSafety(oldIndex, king.owner, newTiles)) {
		return false;
	}

	let currentIndex = oldIndex;
	const vector = newIndex - oldIndex < 0 ? -1 : 1
	let shifts = 0
	const maxShifts = vector > 0 ? 4 : 3
	while (maxShifts > shifts) {
		currentIndex = currentIndex + vector
		var piece = tiles[currentIndex];
		if (piece) {
			if (piece.type == 'Rook' && piece.owner == king.owner && !piece.touched) return true;
			else return false;
		} else {
			let newTiles = prepareChessBoardAfterMove(oldIndex, newIndex, tiles);
			if (!checkTileSafety(currentIndex, king.owner, newTiles)) return false;
		}
		shifts++
	}
}
export default validateCastling;