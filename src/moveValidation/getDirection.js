import { getX, getY } from './coordinatesHelpers';

function getDirection(oldIndex, newIndex){
    let oldX = getX(oldIndex);
    let oldY = getY(oldIndex);
    let newX = getX(newIndex);
    let newY = getY(newIndex);
    if(oldX == newX && newY > oldY){
        return 'right';
    }
    if(oldX == newX && newY < oldY){
        return 'left';
    }
    if(oldX > newX && newY == oldY){
        return 'up';
    }
    if(oldX < newX && newY == oldY){
        return 'down';
    }
    if(oldX > newX && newY > oldY){
        return 'up-right';
    }
    if(oldX < newX && newY > oldY){
        return 'down-right';
    }
    if(oldX < newX && newY < oldY){
        return 'down-left';
    }
    if(oldX > newX && newY < oldY){
        return 'up-left';
    }
}

export default getDirection;
