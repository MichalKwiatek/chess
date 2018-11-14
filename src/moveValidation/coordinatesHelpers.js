export function getX(index) {
  return Math.floor(index / 8);
}

export function getY(index) {
  return index % 8;
}