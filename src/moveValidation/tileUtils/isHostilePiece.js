function isHostile(tiles, index, owner){
  return (tiles[index] && tiles[index].owner !== owner);
}

export default isHostile;