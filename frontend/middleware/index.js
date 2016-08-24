import { query } from './util'
import { receiveQueryData } from './actions'

export const APIMiddleware = dispatch => next => action => {
  const querySuccess = (data) => dispatch(receiveQueryData(data))
  switch(action.type) {
    case 'UPDATE_QUERY':
      query(action.query, querySuccess)
    default:
      return next(action)
  }
} 