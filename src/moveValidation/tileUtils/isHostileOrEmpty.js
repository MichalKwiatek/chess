import isHostile from './isHostilePiece'
import isEmpty from './isEmpty'

const isHostileOrEmpty = (tiles, index, owner) => {
  return isEmpty(tiles, index) || isHostile(tiles, index, owner)
}

export default isHostileOrEmpty;