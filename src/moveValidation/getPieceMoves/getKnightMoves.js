import knightDirections from 'knightDirections';
import getNextPosition from 'getNextPosition';
import isHostileOrEmpty from 'isHostileOrEmpty';

function getKnightMoves(index, tiles) {
  const moves = []
  const piece = tiles[index]

  for (let i = 0; i < knightDirections.length; i++) {
    const move = getNextPosition(index, knightDirections[i])
    if (move && isHostileOrEmpty(tiles, move, piece.owner)) {
      moves.push(new Move({
				newPosition: move,
				oldPosition: index,
			}))
    }
  }

  return moves
}

export default getKnightMoves;