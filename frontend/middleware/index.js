import { query } from '../util'
import { receiveQueryData } from '../actions'

const APIMiddleware = ({dispatch, getState}) => next => action => {
  const querySuccess = (data) => dispatch(receiveQueryData(data))
  switch(action.type) {
    case 'UPDATE_QUERY':
      query(action.query, querySuccess)
    default:
      return next(action)
  }
}

import { applyMiddleware } from 'redux';

export default applyMiddleware(
  APIMiddleware
)
