import React from 'react'
import { Provider } from 'react-redux'
import SearchContainer from './search_con'

export default ({ store }) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);