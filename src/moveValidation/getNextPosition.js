import directionsMoves from './directionsMoves';

function getNextPosition(index, direction){
    let oldX = getX(index);
    let oldY = getY(index);
    if(!validateCoordinates(oldX + directionsMoves[direction].x, oldY + directionsMoves[direction].y)) return null;
    else return index + directionsMoves[direction].total;
}

function getX(index){
    return Math.floor(index/8);
}

function getY(index){
    return index % 8;
}

function validateCoordinates(x, y){
    if(x < 0 || x > 7) return false;
    if(y < 0 || y > 7) return false;
    return true;
}

export default getNextPosition;