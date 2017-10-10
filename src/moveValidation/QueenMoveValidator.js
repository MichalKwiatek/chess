const validateQueenMove = (oldIndex, newIndex) => {
    let validation = false;
    for(let i = -7; i <= 7; i++){
        if((oldIndex - i*8) == newIndex || (oldIndex - i) == newIndex || (oldIndex - i - i*8) == newIndex || (oldIndex + i - i*8) == newIndex){
            validation = true;
        }
    }
    return validation;
}

export default validateQueenMove;