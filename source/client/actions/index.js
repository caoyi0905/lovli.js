
import { SET_ORDERNAME, PRE_PAGE, NEXT_PAGE, INIT_PAGE } from '../constants';

export const setOrderName = (field) => {
  return {
    type: SET_ORDERNAME,
    field
  }
}

export const prePage = (field) => {
  return {
    type: PRE_PAGE,
    field
  }
}

export const nextPage = (field) => {
  return {
    type: NEXT_PAGE,
    field
  }
}

export const initPage = (field) => {
  return {
    type: INIT_PAGE,
    field
  }
}