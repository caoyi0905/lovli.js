
import { SET_ORDERNAME, PRE_PAGE, NEXT_PAGE, INIT_PAGE } from '../constants';
import { combineReducers } from 'redux';

function changeDirection(state = {}, {type} = {}) {
    if (type === SET_ORDERNAME) {
        let newDirection = 'descending';
        if (state.direction == newDirection) {
            newDirection = 'ascending';
        }
        return {...state, direction: newDirection };
    }

    return state;
}

function sortParamsReducer(state = {}, { type, field } = {}) {
    if (type === SET_ORDERNAME) {
        if (state.sortField == field) {
            //if click the button twice,change the direction
            return changeDirection(state, { type });
        }
        return {...state, sortField: field };
    }

    return state;
}

function pageReducer(state = {}, { type, field } = {}) {
    if (type === PRE_PAGE) {
        return {...state, curPage: state.curPage - 1,content:field,  action: 'pre' };
    }
    if (type === NEXT_PAGE) {
        return {...state, curPage: state.curPage + 1,content: field, action: 'next' };
    }
    if (type == INIT_PAGE) {
        return {...state, curPage: 1 ,content: '', action: '' };
    }

    return state;
}

exports.changeDirection = changeDirection;
exports.sortParamsReducer = sortParamsReducer;
exports.pageReducer = pageReducer;