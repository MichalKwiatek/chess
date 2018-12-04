import getNextPosition from 'getNextPosition';
import isEmptyPiece from 'isEmpty';
import isHostilePiece from 'isHostilePiece';

const getPawnMoves = (index, tiles) => {
  const piece = tiles[index];
  let moves = [];
  const mainDirection = getMainDirection(piece.owner)
  const hostileDirections = getHostileDirections(piece.owner)

  let position = getNextPosition(index, mainDirection);
  if (position && isEmptyPiece(tiles, position)) {
    moves.push(new Move({
      newPosition: position,
      oldPosition: index,
    }))
    position = getNextPosition(position, mainDirection);
    if (position && isEmptyPiece(tiles, position) && !piece.touched) {
      moves.push(new Move({
        newPosition: position,
        oldPosition: index,
      }))
    }
  }

  position = getNextPosition(index, hostileDirections[0]);
  if (position && isHostilePiece(tiles, position, piece.owner)) {
    moves.push(new Move({
      newPosition: position,
      oldPosition: index,
    }))
  }

  position = getNextPosition(index, hostileDirections[1]);
  if (position && isHostilePiece(tiles, position, piece.owner)) {
    moves.push(new Move({
      newPosition: position,
      oldPosition: index,
    }))
  }

  return moves
}

function getMainDirection(owner) {
  if (owner === 'white') {
    return 'down'
  } else {
    return 'up'
  }
}

function getHostileDirections(owner) {
  if (owner === 'white') {
    return ['down-left', 'down-right']
  } else {
    return ['up-left', 'up-right']
  }
}

export default getPawnMoves;