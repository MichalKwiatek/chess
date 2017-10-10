const validatePawnMove = (oldIndex, newIndex) => {
    let validation = false;
    if((oldIndex - 8) == newIndex) validation = true;
    return validation;
}

export default validatePawnMove;