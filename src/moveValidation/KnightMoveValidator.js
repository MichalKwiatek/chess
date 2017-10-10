const validateKnightMove = (oldIndex, newIndex) => {
    let correctMoves = [-17, -15, -10, -6, 17, 15, 10, 6];
    let validation = false;
    if(correctMoves.indexOf(newIndex - oldIndex) > -1) validation = true;
    return validation;
}

export default validateKnightMove;