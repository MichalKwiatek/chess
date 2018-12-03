import validateCastling from 'validateCastling'

const correctPiecesForCastling = {
  0: { type: 'Rook', owner: 'white' },
  3: { type: 'King', owner: 'white' },
}

describe('Castling when ', function () {
  it('king already moved fails', () => {
    let newTiles = copyTiles(correctPiecesForCastling)
    newTiles[3].touched = true
    expect(validateCastling(3, 1, newTiles)).toBe(false)
  })

  it('rook already moved fails', () => {
    let newTiles = copyTiles(correctPiecesForCastling)
    newTiles[0].touched = true
    expect(validateCastling(3, 1, newTiles)).toBe(false)
  })

  it('there is piece between rook and king fails', () => {
    let newTiles = copyTiles(correctPiecesForCastling)
    newTiles[1] = { type: 'Bishop', owner: 'white' }
    expect(validateCastling(3, 1, newTiles)).toBe(false)
  })
})

function copyTiles(original) {
  return JSON.parse(JSON.stringify(original))
}
