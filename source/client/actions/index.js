
import { SET_ORDERNAME, PRE_PAGE, NEXT_PAGE, SET_PAGE } from '../constants';

export const setOrderName = (field) => {
  return {
    type: SET_ORDERNAME,
    field
  }
}

export const prePage = () => {
  return {
    type: PRE_PAGE
  }
}

export const nextPage = () => {
  return {
    type: NEXT_PAGE
  }
}

export const setPage = (field) => {
  return {
    type: SET_PAGE,
    field
  }
}