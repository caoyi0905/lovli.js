

function changeDirection (state = {} , {type} = {}) {
    if (type === 'SET_ORDERNAME') {
        let newDirection = 'descending';
        if(state.direction == newDirection){
            newDirection = 'ascending';
        }
        return {...state,direction: newDirection};
    }

    return state;
}

function sortParamsReducer(state = {}, { type, field } = {}) {
    if (type === 'SET_ORDERNAME') {
        if(state.sortField == field){
            console.log('change direction ')
            //if click the button twice,change the direction
            return changeDirection(state,{type});
        }
        return {...state,sortField: field};
    }

    return state;
}

exports.changeDirection = changeDirection;
exports.sortParamsReducer = sortParamsReducer;
