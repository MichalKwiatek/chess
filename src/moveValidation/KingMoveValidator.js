const validateKingMove = (oldIndex, newIndex) => {
    let validation = false;
    for(let i = -1; i < 2; i++){
        if(((oldIndex - 1 - i*8) == newIndex) || ((oldIndex + 1 - i*8) == newIndex) || ((oldIndex - i*8) == newIndex)){
            validation = true;
        }
    }
    return validation;
}

export default validateKingMove;