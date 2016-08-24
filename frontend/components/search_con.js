import { connect } from 'react-redux'
import Search from './search'
import { updateQuery } from '../actions'

const MapStateToProps = (state) => ({
  list: state.places
})

const MapDispatchToProps = (dispatch) => ({
  updateQuery: e => dispatch(updateQuery(e.target.value))
})

export default connect(MapStateToProps, MapDispatchToProps)(Search)